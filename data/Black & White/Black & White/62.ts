import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
				de: "Fußtritt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
				de: "Niederprügler"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The sound of Sawk punching boulders and trees can be heard all the way from the mountains where they train.",
		de: "Am Fuß von Bergen, wo Karadonis trainiert, ertönt das Echo von Fäusten, die gegen Felsen und Bäume schlagen."
	},

	thirdParty: {
		cardmarket: 279800,
		tcgplayer: 88937
	}
}

export default card
