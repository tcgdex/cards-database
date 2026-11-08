import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'de-de': "Magnezone"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magneton"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Shot",
				'fr-fr': "Miroi-Tir",
				'de-de': "Spiegelsalve"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnet Slash",
				'fr-fr': "Tranche magnétique",
				'de-de': "Magnetschlitzer"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Magnezone.",
				'fr-fr': "Défaussez toutes l'Énergie Lightning attachées à Magnézone.",
				'de-de': "Lege alle -Energien, die an Magnezone angelegt sind, auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It evolved from exposure to a special magnetic field. Three units generate magnetism.",
		'fr-fr': "Il a évolué suite à son exposition à un champ magnétique spécial. Ses 3 unités génèrent du magnétisme."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
