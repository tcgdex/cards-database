import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Vision",
				'fr-fr': "Vision Puissante",
			},
			effect: {
				'en-us': "Does 10 damage times the number of cards in your opponent's hand.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fly",
				'fr-fr': "Vol",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 50,

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

	description: {
		'en-us': "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
	},

	thirdParty: {
		cardmarket: 280970,
		tcgplayer: 87796
	}
}

export default card
