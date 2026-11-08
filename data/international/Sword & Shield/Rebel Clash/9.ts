import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [272],

	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spirited Rushdown",
				'fr-fr': "Ruée Impétueuse",
				'es-es': "Asalto Vigoroso",
				'it-it': "Impeto Vigoroso",
				'pt-br': "Ofensiva Espirituosa",
				'de-de': "Beherzter Sturmrausch"
			},
			effect: {
				'en-us': "This attack does 60 damage for each Prize card you have taken.",
				'fr-fr': "Cette attaque inflige 60 dégâts pour chaque carte Récompense que vous avez récupérée.",
				'es-es': "Este ataque hace 60 puntos de daño por cada carta de Premio que hayas cogido.",
				'it-it': "Questo attacco infligge 60 danni per ogni carta Premio che hai preso.",
				'pt-br': "Este ataque causa 60 pontos de dano para cada carta de Prêmio que você pegou.",
				'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 60 Schadenspunkte zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Méga-Sangsue",
				'es-es': "Megaagotar",
				'it-it': "Megassorbimento",
				'pt-br': "Megadreno",
				'de-de': "Megasauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 160,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "The rhythm of bright, festive music activates Ludicolo's cells, making it more powerful."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457438,
				tcgplayer: 213079
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457438,
				tcgplayer: 213079
			}
		},
	],
}

export default card
