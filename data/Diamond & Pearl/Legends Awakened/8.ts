import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray",
		de: "Luxtra"
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
		en: "Luxio",
		fr: "Luxio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rivalry",
				fr: "Rivalité",
				de: "Rivalität"
			},
			effect: {
				en: "If your opponent has any Pokémon LV.X in play, each of Luxray's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si votre adversaire possède des Pokémon NIV.X en jeu, chacune des attaques de Luxray inflige 50 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn dein Gegner mindestens 1 Pokémon LV.X im Spiel hat, fügt jeder Angriff von Luxtra den Aktiven Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Plasma",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card and attach it to Luxray.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Luxray.",
				de: "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Luxtra an."
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
				en: "Shock Bolt",
				fr: "Choc'éclair",
				de: "Schock-Blitz"
			},
			effect: {
				en: "Discard all Lightning Energy attached to Luxray.",
				fr: "Défaussez une Énergie Lightning attachée à Luxray.",
				de: "Lege alle an Luxtra angelegten -Energien auf deinen Ablagestapel."
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
		fr: "Ses yeux voient à travers tout. Il repère les proies cachées derrière un objet pour les capturer."
	}
}

export default card
