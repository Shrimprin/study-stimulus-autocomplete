class AddressBook < ActiveRecord::Migration[7.0]
  def change
    create_table :address_books do |t|
      t.string :full_name
      t.references :user, foreign_key: true
      t.date :birthday
      t.integer :age
      t.string :gender
      t.string :address
      t.string :phone_number
    end
  end
end
