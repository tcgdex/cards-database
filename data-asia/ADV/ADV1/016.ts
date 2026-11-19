import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ラグラージ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [260],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		ja: "ヌマクロー"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-POWER",

		name: {
			ja: "よびみず"
		},

		effect: {
			ja: "このパワーは、自分の番に1回使うことができる。自分の手札から{W}エネルギーを1枚選び出し、自分のバトルポケモンにつける。このポケモンが特殊状態なら、このパワーを使うことはできない。"
		}
	}],

	attacks: [{
		name: {
			ja: "ヒプノスプラッシュ"
		},

		effect: {
			ja: "相手をねむりにする。"
		},

		damage: 50,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784500,
				tcgplayer: 613065,
				cardtrader: 138000,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784500,
				tcgplayer: 613065,
				cardtrader: 138000,
			},
		},
	]
}

export default card
