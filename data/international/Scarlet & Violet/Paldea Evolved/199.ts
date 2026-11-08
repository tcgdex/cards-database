import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [662],
	set: Set,

	name: {
		'fr-fr': "Braisillon",
		'en-us': "Fletchinder",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Passerouge",
		'en-us': "Fletchling",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Piqué Échauffant",
			'en-us': "Heat Dive",
			'es-es': "Picado Ardiente",
			'it-it': "Picchiata Rovente",
			'pt-br': "Mergulho Aquecido",
			'de-de': "Hitziger Sturzflug"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715674,
				tcgplayer: 497602,
				cardtrader: 248853
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	description: {
		'en-us': "Fletchinder scatters embers in tall grass where bug Pokémon might be hiding and then catches them as they come leaping out.",
	},
}

export default card
