import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'de-de': "Impergator"
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
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Berserk",
				'fr-fr': "Folie meurtrière",
				'de-de': "Berserk"
			},
			effect: {
				'en-us': "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
				'fr-fr': "Lorsque vous jouez Aligatueur depuis votre main, lancez une pièce. Si c'est face, défaussez les 5 premières cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 premières cartes du dessus de votre deck.",
				'de-de': "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent´s deck. If tails, discard the top 5 cards from your deck."
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
				'en-us': "Chomp",
				'fr-fr': "Croc",
				'de-de': "Chomp"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur Aligatueur. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads."
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
	retreat: 3,


	description: {
		'en-us': "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
		'fr-fr': "Lorsqu'il mord avec ses puissantes mâchoires, il secoue la tête et déchire sauvagement ses victimes en morceaux."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85412
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85412
			}
		}
	]
}

export default card
