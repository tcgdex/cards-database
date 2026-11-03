import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポッポ"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [16],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "なかまをよぶ"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "たいあたり"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
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
				cardmarket: 746519,
				tcgplayer: 567538,
				cardtrader: 269694,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577373,
			},
		},
	]
}

export default card
