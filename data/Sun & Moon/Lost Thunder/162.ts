import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
		es: "Kecleon",
		it: "Kecleon",
		pt: "Kecleon",
		de: "Kecleon"
	},
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 3",
				fr: "Couleur Unitaire 3",
				es: "Color Unidad 3",
				it: "Unione Colore 3",
				pt: "Cor Unitária 3",
				de: "Aggregat-Farbe 3"
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy FightingDarknessFairy attached to it, it is a Fighting, Darkness, and Fairy Pokémon.",
				fr: "Tant que de l’Énergie Unitaire FightingDarknessFairy est attachée à ce Pokémon, c’est un Pokémon Fighting, Darkness et Fairy.",
				es: "Mientras este Pokémon tenga alguna carta de Energía Unidad FightingDarknessFairy unida a él, es un Pokémon Fighting, Darkness y Fairy.",
				it: "Fintanto che ha delle carte Energia Unione FightingDarknessFairy assegnate, questo Pokémon è di tipo Fighting, Darkness e Fairy.",
				pt: "Enquanto este Pokémon tiver Energia Unitária FightingDarknessFairy ligada a ele, será um Pokémon Fighting, Darkness e Fairy.",
				de: "Solang an dieses Pokémon Aggregat-Energie FightingDarknessFairy angelegt ist, ist es ein Fighting-, Darkness- und Fairy-Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
				es: "Bofetada Gentil",
				it: "Schiaffetto",
				pt: "Tapinha",
				de: "Sanfter Hieb"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
