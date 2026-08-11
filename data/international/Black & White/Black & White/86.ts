import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
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
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fly",
				'fr-fr': "Vol",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
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
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
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

	description: {
		'en-us': "Males swing their head plumage to threaten opponents. The females' flying abilities surpass those of the males.",
	},

	thirdParty: {
		cardmarket: 279824,
		tcgplayer: 90159
	}
}

export default card
