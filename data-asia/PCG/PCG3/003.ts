import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "グリマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "おしゃべり",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを選択し、1つの防御ポケモンで切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スピット毒",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
