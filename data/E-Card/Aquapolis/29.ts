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

	dexId: [
		57,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
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
				de: "Karate Chop"
			},

			effect: {
				en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
				fr: "Les dégâts de cette attaque sont réduits de 10 pour chaque marqueur de dégâts sur Colossinge.",
				de: "Damage from this attack is reduced by 10 for each damage counter on Primeape."
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
				de: "Sudden Charge"
			},
			effect: {
				en: "Primeape does 10 damage to itself. Then, switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Colossinge s'inflige 30 dégâts. Ensuite, votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc, s'il en a.",
				de: "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275101,
		tcgplayer: 88359
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
