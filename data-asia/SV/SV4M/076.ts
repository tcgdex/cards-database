import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルット",
		th: "ทิลท์โท"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
		th: "ถ้าตัวเองและรอบข้างไม่สะอาดจะรู้สึกกระสับกระส่าย พอเจอสิ่งสกปรกจะใช้ปีกเช็ด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			th: "จิก"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずをなおす",
			th: "รักษาบาดแผล"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「30」回復する。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]"
		}
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
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741881
	}
}

export default card