import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		703,
	],
	hp: 90,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wonder Ray",
				fr: "Rayon Miracle",
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by any Pokémon that has an Ability.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon ayant un talent.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
