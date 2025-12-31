import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		de: "Seedraking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Hyporoi.",
				de: "Wirf eine Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Auswirkungen von Angriffen auf Seedraking (einschließlich der Schadenspunkte)."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Tornado",
				fr: "Tornade du dragon",
				de: "Drachen-Tornado"
			},
			effect: {
				en: "If this attack doesn't Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokémon.",
				fr: "Si cette attaque ne met pas K.O. le Pokémon Défenseur, et s'il y a des Pokémon sur le Banc de votre adversaire, choisissez l'un d'eux et échangez-le avec le Pokémon Défenseur",
				de: "Falls dieser Angriff das verteidigende Pokémon nicht kampfunfähig macht, und falls dein Gegner mindestens ein Pokémon auf der Bank hat, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus."
			},
			damage: 50,

		},
	],

	description: {
		fr: "On prétend qu'il se cache dans des grottes sous-marines. Il peut créer des tourbillons rien que par son bâillement."
	},

	thirdParty: {
		cardmarket: 274408,
		tcgplayer: 86440
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
