import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Berserk",
				fr: "Folie meurtrière",
				de: "Berserk"
			},
			effect: {
				en: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
				fr: "Lorsque vous jouez Aligatueur depuis votre main, lancez une pièce. Si c'est face, défaussez les 5 premières cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 premières cartes du dessus de votre deck.",
				de: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent´s deck. If tails, discard the top 5 cards from your deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Chomp",
				fr: "Croc",
				de: "Chomp"
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur Aligatueur. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Lorsqu'il mord avec ses puissantes mâchoires, il secoue la tête et déchire sauvagement ses victimes en morceaux."
	},

	thirdParty: {
		cardmarket: 274404
	}
}

export default card
