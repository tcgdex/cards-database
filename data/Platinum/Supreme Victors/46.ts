import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		327,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Removal",
				fr: "Enlèvement synchronisé",
			},
			effect: {
				en: "If any Energy card attached to Spinda is the same type as any Energy card attached to the Defending Pokémon, discard 1 of those Energy cards from the Defending Pokémon.",
				fr: "Si une carte Énergie attachée à Spinda est du même type que n'importe quelle carte Énergie attachée au Pokémon Défenseur, défaussez 1 de ces cartes Énergie attachées au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pulled Punch",
				fr: "Poing doux",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 30.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 30.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
