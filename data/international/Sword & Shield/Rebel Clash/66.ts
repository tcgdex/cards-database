import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [738],

	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Storm",
				'fr-fr': "Tempête Puissante",
				'es-es': "Tormenta Recia",
				'it-it': "Tempestona",
				'pt-br': "Tempestade Poderosa",
				'de-de': "Mächtiger Sturm"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
				'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt Beam",
				'fr-fr': "Secousse Tonnerre Lumineuse",
				'es-es': "Rayo Sacudida Atronadora",
				'it-it': "Raggio Scoppiotuono",
				'pt-br': "Feixe de Choque do Trovão",
				'de-de': "Donnerrüttlerstrahl"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 150,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457763,
				tcgplayer: 213149
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457763,
				tcgplayer: 213149
			}
		},
	],
}

export default card
