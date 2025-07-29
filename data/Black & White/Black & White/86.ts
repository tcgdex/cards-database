import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
			},

			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279824
	}
}

export default card
