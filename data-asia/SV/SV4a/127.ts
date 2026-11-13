import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "シルシュルー"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [944],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "きのみさがし"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加える。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ひっかく"
		},

		damage: 10,
		cost: ["Darkness"]
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
				cardmarket: 746509,
				tcgplayer: 567528,
				cardtrader: 269707,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577367,
			},
		},
	]
}

export default card
