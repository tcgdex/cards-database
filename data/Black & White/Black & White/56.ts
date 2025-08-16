import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 30,

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
		cardmarket: 279794,
		tcgplayer: 85016
	}
}

export default card
