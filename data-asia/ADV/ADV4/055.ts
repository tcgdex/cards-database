import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Regirock Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [377],
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "癒しの石",
			},
			effect: {
				ja: "ターンの間にいつでも、Regirock Exから1つのダメージカウンターを取り外します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "トン数",
			},
			effect: {
				ja: "60ダメージに加えて20ダメージを与えます。もしそうなら、Regirock Exはそれ自体に30のダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
