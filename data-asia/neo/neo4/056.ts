import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いexeggutor",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "トリプルヘッドバット",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "マックスバースト",
			},
			effect: {
				ja: "相手のポケモンに取り付けられたエネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
