import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "None",
	category: "Pokemon",
	dexId: [925],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ワッカネズミ"
	},

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ビンタ"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ファミリーアタック"
		},

		effect: {
			ja: "自分の場の「イッカネズミ」の数×70ダメージ。"
		},

		damage: "70×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746535,
				tcgplayer: 567554,
				cardtrader: 269785,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577385,
			},
		},
	]
}

export default card
