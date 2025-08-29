import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのシードラ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "テールスナップ",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "ノックアウト針",
			},
			effect: {
				ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は30ダメージに加えて60ダメージを与えます。それらの1または両方が尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
