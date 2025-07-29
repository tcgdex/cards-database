import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		pt: "Mamoswine",
		de: "Mamutel"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Stone",
				fr: "Roc Gelé",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'Boule Sans Fin",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 90 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280768
	}
}

export default card
