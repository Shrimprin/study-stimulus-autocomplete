import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user"
export default class extends Controller {

　// 取得したい要素の静的プロパティ(フォーム上の data-user-target="" で指定した名称)
  static targets = [
                    "full_name",
                    "birthday",
                    "age",
                    "gender",
                    "address",
                    "phone_number",
                    "select_addresses"
                    ]

 // イベント発生時に実行するアクション
 selectAddressBook(){
  // アドレス帳のidを取得
  const selectedValue = this.select_addressesTarget.value
  // JSONデータに変換されたアドレス帳情報をターゲット（select_addresses）から取得
  const addressBooks = JSON.parse(this.select_addressesTarget.dataset.json)

  // 各フォームの要素を格納
  // selectAllしている要素は入力が複数がある要素（性別はチェックボックスが2つ、生年月日は年、月、日のプルダウンで3つ）+
  const fullNameForm = this.full_nameTarget // 氏名
  const birthdayForm = this.birthdayTarget.querySelectorAll("select") // 誕生日
  const defaultBirthday = ["1990", "1", "1"] // デフォルトの誕生日
  const ageForm = this.ageTarget // 年齢
  const genderForm = this.genderTarget.querySelectorAll("input") // 性別
  const addressForm = this.addressTarget // 住所
  const phoneNumberForm = this.phone_numberTarget // 電話番号


  // セレクトボックスから選択した氏名（アドレス帳id）の個人情報をフォームに入力する
    addressBooks.forEach((addressBook, index) => {
      // セレクトボックスから選択したアドレス帳idが addressBooksのidと一致した場合
      if(Number(addressBook.id) === Number(selectedValue)){
        // 氏名
        fullNameForm.value = addressBook.full_name

        // 生年月日
        for(let i=0; i<birthdayForm.length; i++){
          birthdayForm[i].value = Number(addressBook.birthday.split("-")[i])
        }

        // 年齢
        ageForm.value = addressBook.age

        // 性別
        if(addressBook.gender === "男"){
          genderForm[0].checked = true
        }else{
          genderForm[1].checked = true
        }

        // 住所
        addressForm.value = addressBook.address

        // 電話番号
        phoneNumberForm.value = addressBook.phone_number

      }else if(selectedValue === ""){ // 「選択なし」の場合
        fullNameForm.value = "" // 氏名
        for(let i=0; i<birthdayForm.length; i++){ //生年月日
          birthdayForm[i].value = Number(defaultBirthday[i])
        }
        ageForm.value = "" // 年齢
        genderForm[0].checked = true // 性別
        addressForm.value = "" // 住所
        phoneNumberForm.value = "" // 電話番号
      }
    })

  }
}
