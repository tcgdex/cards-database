import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラミンゴ"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	dexId: [973],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "お腹に 溜めた エネルギーが くちばしから 漏れないように 首を 根元で 結んでいるらしい。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いっきにむれる"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「カラミンゴ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			ja: "だんけつのつばさ"
		},

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。"
		},

		damage: "20×",
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
				cardmarket: 746537,
				tcgplayer: 567556,
				cardtrader: 269767,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577386,
			},
		},
	]
}

export default card
