import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone"
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
		en: "Magneton",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Mirror Shot",
				fr: "Miroi-Tir",
				de: "Spiegelsalve"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
				en: "Magnet Slash",
				fr: "Tranche magnétique",
				de: "Magnetschlitzer"
			},
			effect: {
				en: "Discard all Lightning Energy attached to Magnezone.",
				fr: "Défaussez toutes l'Énergie Lightning attachées à Magnézone.",
				de: "Lege alle -Energien, die an Magnezone angelegt sind, auf deinen Ablagestapel."
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

	description: {
		fr: "Il a évolué suite à son exposition à un champ magnétique spécial. Ses 3 unités génèrent du magnétisme."
	},

	variants: [
		{
			type: "holo",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
