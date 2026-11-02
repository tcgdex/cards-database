import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "エーフィ"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [196],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		ja: "イーブイ"
	},

	description: {
		ja: "全身の 細やかな 体毛で 空気の 流れを 感じて 敵の 考えや 天候を 予測する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "サイコアラート"
		},

		effect: {
			ja: "自分の手札が6枚になるように、山札を引く。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "シャドーボール"
		},

		effect: {
			ja: "相手のポケモンを1匹選び、40ダメージ。このワザのダメージは、ベンチポケモンに与えても弱点・抵抗力の計算をする。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567867, tcgplayer: 602245, cardtrader: 142999 }, stamp: ["1st-edition"] }
	]
}

export default card
