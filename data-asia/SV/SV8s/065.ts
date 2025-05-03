import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Wattrel",
		th: "ไคเด็น"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Wattrel membuat sarangnya pada tebing di pesisir pantai. Sarang Pokémon ini populer dengan tekstur dan rasanya yang renyah nan unik.",
		th: "สร้างรังบนหน้าผาริมชายฝั่ง รังของมันเป็นอาหารแสนโอชะและเป็น ที่นิยมเนื่องจากเนื้อสัมผัสประหลาดที่จะแตกเปรี๊ยะภายในปาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Jungkiran Walet",
			th: "คมมีดบูมเมอแรง"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
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