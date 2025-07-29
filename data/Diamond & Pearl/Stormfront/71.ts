import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		fr: "Ponyta",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'pattes",
				de: "Schmetterkick"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Ponyta during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Ponyta lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Ponita zugefügt würden."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "La crinière et la queue ardentes lui donnant sa superbe poussent une heure après sa naissance."
	},

	thirdParty: {
		cardmarket: 278369
	}
}

export default card
