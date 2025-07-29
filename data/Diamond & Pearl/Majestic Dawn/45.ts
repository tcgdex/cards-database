import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Raichu during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Raichu lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei 'Kopf' verhindere wärend des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Raichu zugefügt würden."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy cards attached to Raichu.",
				fr: "Défaussez toutes les cartes Énergie attachées à Raichu.",
				de: "Lege alle Energiekarten, die an Raichu angelegt sind, auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278094
	}
}

export default card
