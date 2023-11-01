# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

50.times do |i|
  user =
    User.create!(
      name: "ユーザー#{i}"
    )

  12.times do |j|
    AddressBook.create!(
      full_name: "アドレス#{j}",
      gender: '男',
      age: j,
      birthday: Date.new(1994, 1, 1),
      address: 'hoge',
      phone_number: 'xxx-xxxx-xxxx',
      user_id: user.id
    )
  end
end

