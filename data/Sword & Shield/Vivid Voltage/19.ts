import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [781],
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		it: "Dhelmise",
		pt: "Dhelmise",
		de: "Moruda"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
				es: "Garfio",
				it: "Uncino",
				pt: "Gancho",
				de: "Haken"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Anchor",
				fr: "Ancrage Spécial",
				es: "Ancla Especial",
				it: "Ancora Speciale",
				pt: "Âncora Especial",
				de: "Spezial-Anker"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached, this attack does 60 more damage.",
				fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon."
	}
}

export default card
