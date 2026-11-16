import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "コマタナ",
		'zh-tw': "駒刀小兵"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [624],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "鋭い 刃を 操り 敵を 追い詰める。 河原の 石で 体の 刃を 手入れする。",
		'zh-tw': "揮舞銳利的刀刃將敵人逼向絕境。會用河灘的 石頭來精心保養刀刃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "とつげき",
			'zh-tw': "突擊"
		},

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 30,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651018,
				tcgplayer: 569805,
				cardtrader: 234115,
			},
		},
	]
}

export default card