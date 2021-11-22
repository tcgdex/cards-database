import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		246,
	],
	hp: 40,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Croque-montagne"
			},
			effect: {
				en: "Your opponent discards the top card from his or her deck. Then you remove a damage counter from Larvitar.",
				fr: "Votre adversaire se défausse de la carte du dessus de son deck. Retirez ensuite un marqueur de dégâts de Embrylex."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
