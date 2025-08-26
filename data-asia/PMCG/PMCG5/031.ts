import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのデューゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "アイススロー",
			},
			effect: {
				ja: "防御ポケモンが戦っている場合、この攻撃の基本ダメージは2倍になります。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "MistyのDewgongはそれ自体に20のダメージを与えます。",
			},
			damage: 60,
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
