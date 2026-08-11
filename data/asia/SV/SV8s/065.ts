import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Wattrel",
		'th-th': "ไคเด็น"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Wattrel membuat sarangnya pada tebing di pesisir pantai. Sarang Pokémon ini populer dengan tekstur dan rasanya yang renyah nan unik.",
		'th-th': "สร้างรังบนหน้าผาริมชายฝั่ง รังของมันเป็นอาหารแสนโอชะและเป็น ที่นิยมเนื่องจากเนื้อสัมผัสประหลาดที่จะแตกเปรี๊ยะภายในปาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Jungkiran Walet",
			'th-th': "คมมีดบูมเมอแรง"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card