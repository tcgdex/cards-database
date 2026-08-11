import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホップのザシアンex"
	},

	illustrator: "DOM",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "せつなぎり"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'ja-jp': "ブレイブスラッシュ"
		},

		damage: 240,

		effect: {
			'ja-jp': "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807715,
				tcgplayer: 615004,
			},
		},
	],

	retreat: 2
}

export default card