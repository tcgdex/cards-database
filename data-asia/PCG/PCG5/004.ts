import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "グリマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "上昇",
			},
			effect: {
				ja: "グリマーから進化するカードをデッキで検索し、グリマーに置きます。 （これは進化するグリマーとしてカウントされます。）その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スラッジトス",
			},
			damage: 20,
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
