import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "エネコロロ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [301],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "エネコ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Poke-POWER",

		name: {
			ja: "エナジードロー"
		},

		effect: {
			ja: "このパワーは、自分の番に1回使うことができる。自分の手札からエネルギーを1枚選び出し、トラッシュする。その後、自分の山札からカードを3枚まで引く。このポケモンが特殊状態なら、このパワーを使うことはできない。"
		}
	}],

	attacks: [{
		name: {
			ja: "エネだまMAX"
		},

		effect: {
			ja: "自分のバトルポケモン全員のエネルギーの合計×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784529,
				tcgplayer: 613057,
				cardtrader: 138029,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784529,
				tcgplayer: 613057,
				cardtrader: 138029,
			},
		},
	]
}

export default card
