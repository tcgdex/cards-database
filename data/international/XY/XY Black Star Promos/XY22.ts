import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Deep Wind",
				'fr-fr': "Vent Puissant",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Asleep, this attack does 60 more damage and heal 30 damage from this Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 60 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "−20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
	},

	thirdParty: {
		cardmarket: 552884
	}
}

export default card
