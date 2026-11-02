import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		de: "Giflor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [45],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Scent",
				fr: "Senteur empoisonnée",
				de: "Giftiger Duft"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné et Confus. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné et Endormi.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt vergiftet und verwirrt. Bei „Zahl“ ist das Verteidigende Pokémon jetzt vergiftet und schläft."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Addictive Pollen",
				fr: "Pollen drogué",
				de: "Süchtigmachender Pollen"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter pendant son prochain tour.",
				de: "Wirf eine Münze. Bei „Kopf“ kann dein Gegner während seines nächsten Zuges keine Unterstützer-Karten spielen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90378,
				cardmarket: 275066
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90378,
				cardmarket: 275066
			}
		},
	]
}

export default card
