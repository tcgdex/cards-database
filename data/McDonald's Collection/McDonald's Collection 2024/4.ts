import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	illustrator: "Saya Tsuruta",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [39],

	hp: 60,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Pound",
			},
			damage: 20
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Let's All Rollout",
			},
			effect: {
				en: "This attack does 20 more damage for each of your Benched Pokémon that has the Let's Rollout Attack.",
			},
			damage: "20x",
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802826,
				tcgplayer: 614373
			}
		}
	]
}

export default card

