import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rivalry",
				'fr-fr': "Rivalité",
				'de-de': "Rivalität"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon LV.X in play, each of Luxray's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Si votre adversaire possède des Pokémon NIV.X en jeu, chacune des attaques de Luxray inflige 50 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn dein Gegner mindestens 1 Pokémon LV.X im Spiel hat, fügt jeder Angriff von Luxtra den Aktiven Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				'en-us': "Plasma",
				'fr-fr': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card and attach it to Luxray.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Luxray.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Luxtra an."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shock Bolt",
				'fr-fr': "Choc'éclair",
				'de-de': "Schock-Blitz"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Luxray.",
				'fr-fr': "Défaussez une Énergie Lightning attachée à Luxray.",
				'de-de': "Lege alle an Luxtra angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It has eyes that can see through anything. It spots and captures prey hiding behind objects.",
		'fr-fr': "Ses yeux voient à travers tout. Il repère les proies cachées derrière un objet pour les capturer."
	},

	thirdParty: {
		cardmarket: 278157,
		tcgplayer: 86947
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
