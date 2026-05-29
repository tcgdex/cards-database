import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Oshawott",
		fr: "Moustillon",
		es: "Oshawott",
		it: "Oshawott",
		pt: "Oshawott",
		de: "Ottaro"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Razor Shell",
				fr: "Coquilame",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The scalchop on its stomach is made from the same elements as claws. It detaches the scalchop for use as a blade.",
	},

	thirdParty: {
		cardmarket: 279766,
		tcgplayer: 87891
	}
}

export default card
