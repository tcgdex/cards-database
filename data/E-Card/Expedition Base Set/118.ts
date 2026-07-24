import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Apricorn Forest",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Trainer",
	trainerType: "Stadium",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Flail"
			},
			effect: {
				en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), if that player's Bench isn't full, that player flips a coin. If heads, that player shows his or her opponent a basic Energy card from his or her hand. Then, that player searches his or her deck for a Basic Pokémon card of the same type (color) as the revealed Energy card and puts it onto his or her Bench. The player shuffles his or her deck afterward.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				de: "This attack does 10 damage times the number of damage counters on Magikarp."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87024,
				cardmarket: 274993
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
