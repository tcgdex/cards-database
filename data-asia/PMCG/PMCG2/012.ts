import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "exeggutor",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "テレポート",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つを備えたスイッチのexeggutor。",
			},

		},
		{
			cost: ["Colorless"],
			name: {
				ja: "大きな卵の幅",
			},
			effect: {
				ja: "Exeggutorに取り付けられたエネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
	],

	retreat: 3,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
