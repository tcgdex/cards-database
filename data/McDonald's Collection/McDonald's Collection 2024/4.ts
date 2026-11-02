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
				de: "Klaps"
			},
			damage: 20
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Let's All Rollout",
				de: "Gemeinsamer Walzer"
			},
			effect: {
				en: "This attack does 20 more damage for each of your Benched Pokémon that has the Let's Rollout Attack.",
				de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das die Attacke Gemeinsamer Walzer hat, 20 Schadenspunkte zu."
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

