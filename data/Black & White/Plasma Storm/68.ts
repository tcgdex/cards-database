import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Elgyem",
		fr: "Lewsor",
		es: "Elgyem",
		it: "Elgyem",
		pt: "Elgyem",
		de: "Pygraulon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		605,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				de: "Psychoschuss"
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

	description: {
		en: "Rumors of its origin are linked to a UFO crash site in the desert 50 years ago.",
		de: "Man sagt, es sei vor 50 Jahren aus den Tiefen einer Wüste erschienen, in der zuvor angeblich ein UFO abgestürzt war."
	},

	thirdParty: {
		cardmarket: 280808,
		tcgplayer: 85179
	}
}

export default card
