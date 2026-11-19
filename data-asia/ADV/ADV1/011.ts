import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "バシャーモ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [257],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		ja: "ワカシャモ"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-POWER",

		name: {
			ja: "たきつける"
		},

		effect: {
			ja: "このパワーは、自分の番に1回使うことができる。自分のトラッシュから{R}エネルギーを1枚選び出し、自分のベンチポケモンにつける。このポケモンが特殊状態なら、このパワーを使うことはできない。"
		}
	}],

	attacks: [{
		name: {
			ja: "ファイヤーストリーム"
		},

		effect: {
			ja: "自分の{R}エネルギーを1個トラッシュし、相手のベンチポケモン全員にも、それぞれ10ダメージ。"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784495,
				tcgplayer: 613055,
				cardtrader: 137995,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784495,
				tcgplayer: 613055,
				cardtrader: 137995,
			},
		},
	]
}

export default card
