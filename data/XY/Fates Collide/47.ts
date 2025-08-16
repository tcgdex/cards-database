import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
				es: "Derrumbar",
				it: "Batosta",
				pt: "Abater",
				de: "Niederprügler"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Kick",
				fr: "Coup d'Pied Magnum",
				es: "Patada Mágnum",
				it: "Supercalcio",
				pt: "Chute Magnum",
				de: "Magnumtritt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289869,
		tcgplayer: 117807
	}
}

export default card
