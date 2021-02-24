import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 230,
	types: [
		"Metal",
	],

	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dauntless Shield",
				fr: "Égide Inflexible",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Assault Tackle",
				fr: "Tacle Assaillant",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
