import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エイパム",
		th: "เอย์แพม"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "木の 上から 獲物が いないか 探す。 好物の アマカジを 見ると 興奮して 飛びかかるぞ。",
		th: "จะคอยมองหาเหยื่อจากบนต้นไม้ พอเจออมาคาจิที่เป็นของโปรด จะตื่นเต้นจนกระโดดเข้าใส่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くすねる",
			th: "ฉกฉวย"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひらてうち",
			th: "ฝ่ามือตบ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741878
	}
}

export default card