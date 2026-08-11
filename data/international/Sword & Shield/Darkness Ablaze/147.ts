import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [398],

	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'pt-br': "Staraptor",
		'de-de': "Staraptor"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Blender",
				'fr-fr': "Ouragan Mixant",
				'es-es': "Batidora Huracán",
				'it-it': "Tifone Caotico",
				'pt-br': "Furacão Desordenado",
				'de-de': "Sturmmixer"
			},
			effect: {
				'en-us': "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, comme il vous plaît.",
				'es-es': "Mueve cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
				'it-it': "Sposta un numero qualsiasi di Energie dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
				'pt-br': "Mova qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
				'de-de': "Verschiebe beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
				'es-es': "Pájaro Osado",
				'it-it': "Baldeali",
				'pt-br': "Pássaro Bravo",
				'de-de': "Sturzflug"
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
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage2",

	description: {
		'en-us': "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483614,
				tcgplayer: 219355
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483614,
				tcgplayer: 219355
			}
		},
	],
}

export default card
