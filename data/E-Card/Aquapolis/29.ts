import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [57],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},

			effect: {
				en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
				fr: "Les dégâts de cette attaque sont réduits de 10 pour chaque marqueur de dégâts sur Colossinge.",
				de: "Der Schaden durch diesen Angriff wird für jede Schadensmarke auf Rasaff um 10 reduziert."
			},

			damage: "40-"
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sudden Charge",
				fr: "Charge soudaine",
				de: "Plötzlicher Ansturm"
			},
			effect: {
				en: "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Colossinge s'inflige 30 dégâts. Ensuite, votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc, s'il en a.",
				de: "Rasaff fügt sich selber 10 Schadenspunkte zu. Dann tauscht dein Gegner das Verteidigende Pokémon mit 1 der Pokémon auf seiner Bank, falls er dort mindestens eins hat."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88359,
				cardmarket: 275101
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88359,
				cardmarket: 275101
			}
		},
	]
}

export default card
