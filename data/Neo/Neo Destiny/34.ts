import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Flaaffy",
		fr: "Lainergie obscur",
		de: "Dunkles Waaty"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "High Voltage",
				fr: "Haut voltage",
				de: "Starkstrom"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur pendant son prochain tour.",
				de: "Wirf eine Münze. Bei „Kopf“ kann der Gegner während seines nächsten Zuges keine Trainer-Karten spielen."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Stun Wave",
				fr: "Para-vague",
				de: "Betäubungswelle"
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.",
				fr: "Si le Pokémon Défenseur a un Pouvoir Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin de votre prochain tour.",
				de: "Wenn das verteidigende Pokémon eine Pokémon-Power hat, funktioniert diese Power bis zum Ende deines nächsten Zuges nicht."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "As a result of storing massive amounts of electricity there, it can no longer grow wool on certain areas of its body.",
		fr: "À cause des énormes quantités d'électricité qu'il stocke, sa laine ne pousse plus à certains endroits de son corps.",
		de: "Da es an manchen Stellen seines Körpers riesige Mengen an Elektrizität speichert, kann es dort keine Wolle mehr wachsen lassen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274686,
				tcgplayer: 84595
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274686,
				tcgplayer: 84595
			}
		}
	]
}

export default card
