import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Zekrom-EX",
		fr: "Zekrom-EX",
		es: "Zekrom-EX",
		it: "Zekrom-EX",
		pt: "Zekrom-EX",
		de: "Zekrom-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Glinting Claw",
				fr: "Griffe Scintillante",
				de: "Schimmernde Klaue"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Volt",
				fr: "Décharge Foudroyante",
				de: "Voltkraft"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
