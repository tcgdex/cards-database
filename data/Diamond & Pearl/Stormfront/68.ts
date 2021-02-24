import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Misdreavus",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		200,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Feuforêve",
	},
	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Lullaby",
				fr: "Comptine",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Nightmare Feast",
				fr: "Festin cauchemardesque",
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, this attack does 50 damage and remove 5 damage counters from Misdreavus. If the Defending Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts et retire à Feuforêve 5 marqueurs de dégât. Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
			},

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
