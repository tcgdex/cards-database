import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ฮิเมงกะ",
		id: "Gossifleur"
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		th: "ปักก้านบนผิวดิน เมื่ออาบแสงอาทิตย์เต็มที่กลีบดอกไม้จะมีสีสันสดใส",
		id: "Ketika Gossifleur menancapkan satu kakinya ke tanah dan bermandikan banyak cahaya matahari, kelopak bunganya akan berwarna cerah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดับเบิลสปิน",
			id: "Double Spin"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card