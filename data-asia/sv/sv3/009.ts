import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カプサイジ",
		'zh-tw': "熱辣娃",
		th: "แคปไซจิ"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [951],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体内で 辛み成分が 増えて 技が どんどん 辛くなるのだ。",
		'zh-tw': "沐浴在太陽下越久，體內的辣味成分就會增加得越多， 招式也會變得越來越辣。",
		th: "ยิ่งอาบแสงอาทิตย์มากเท่าไหร่ สารเผ็ดในร่างกายก็จะเพิ่มขึ้น และท่าโจมตีก็จะค่อย ๆ เผ็ดขึ้นด้วย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card