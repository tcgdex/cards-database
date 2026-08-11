import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "トリプルレーザー"
		},

		effect: {
			ja: "相手のポケモン3匹に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "サイバネホイール"
		},

		damage: 160,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
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
			type: "holo",
			thirdParty: {
				cardmarket: 693178,
				tcgplayer: 568329,
			},
		},
	],

	retreat: 3
}

export default card