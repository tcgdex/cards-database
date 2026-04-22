import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Heledelle",
		de: "Schwalboss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				de: "Greifer"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Dive",
				fr: "Plongeon rapide",
				de: "Schnelltaucher"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 50 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 50 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wirf 1 Münze. Bei 'Kopf' wähle 1 gegnerisches Pokémon. Dieser Angriff fügt dem ausgewählten Pokémon 50 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des ausgewählten nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 89689,
		cardmarket: 275922
	}
}

export default card
