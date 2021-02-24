import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Duskull",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Skélénox",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Silhouette",
				fr: "Silhouette",
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon. If the Defending Pokémon already has any damage counters on it, put 2 damage counters on that Pokémon instead.",
				fr: "Placez 1 marqueur de dégât sur le Pokémon Défenseur. Si le Pokémon Défenseur possède déjà des marqueurs de dégât, placez sur ce Pokémon 2 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
				fr: "Feu follet",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
