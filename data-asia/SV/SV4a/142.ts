import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドードー"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [84],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "２つの 頭の 脳みそは テレパシーのような 力で 気持ちを 通じ合わせているらしい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "とつげき"
		},

		effect: {
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Colorless"]
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
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746524,
				tcgplayer: 567543,
				cardtrader: 269793,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577376,
			},
		},
	]
}

export default card
