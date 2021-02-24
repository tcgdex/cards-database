import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Little Grudge",
				fr: "Petite Rancune",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is Knocked Out by damage from an attack, discard an Energy attached to the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O. par les dégâts d’une attaque, défaussez une Énergie attachée au Pokémon Attaquant.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
