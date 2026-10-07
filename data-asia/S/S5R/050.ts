import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Double rare",
	dexId: [892],
	set: Set,

	name: {
		ja: "れんげきウーラオスV",
		'zh-tw': "連擊武道熊師V",
		th: "วูลาโอส จู่โจมต่อเนื่องV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "ひるがえす",
			'zh-tw': "狡兔三窟",
			th: "พริ้ว"
		},

		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ひゃくれつラッシュ",
			'zh-tw': "百裂猛攻",
			th: "กระหน่ำตีร้อยพิฆาต"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533822, tcgplayer: 569091, cardtrader: 240059 } }
	]
}

export default card