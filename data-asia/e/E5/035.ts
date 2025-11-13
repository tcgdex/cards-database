import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "Delibird",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "限られた配達",
			},
			effect: {
				ja: "テクニカルマシンまたはポケモンツールカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "蹴ってください",
			},
			effect: {
				ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
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
			stamps: ["1st Edition"],
		},
	],
};

export default card
