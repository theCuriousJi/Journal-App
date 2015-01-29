class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
      add_index :posts, :title, unique: true
  end
end
