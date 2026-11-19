import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "サーナイト"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [282],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		ja: "キルリア"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-POWER",

		name: {
			ja: "トランスシェイド"
		},

		effect: {
			ja: "このパワーは、自分の番に1回使うことができる。自分の山札からの{P}エネルギーを1枚選び出し、自分のポケモンにつける。その後、そのエネルギーをつけたポケモンにダメージカウンターを2個のせる。山札を見た場合、その山札を切る。このポケモンが特殊状態なら、このパワーを使うことはできない。"
		}
	}],

	attacks: [{
		name: {
			ja: "エネバースト"
		},

		effect: {
			ja: "自分と相手のエネルギーの合計×10ダメージ。"
		},

		damage: "10×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784513,
				tcgplayer: 613059,
				cardtrader: 138013,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784513,
				tcgplayer: 613059,
				cardtrader: 138013,
			},
		},
	]
}

export default card
