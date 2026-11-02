import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	illustrator: "Toshinao Aoki",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [780],

	hp: 120,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Gentle Slap",
				de: "Sanfter Hieb"
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Raging Cannon",
				de: "Wutkanone"
			},
			damage: "100+",
			effect: {
				en: "If all your Benched Pokémon have at least 1 damage counter on them, this attack does 120 more damage.",
				de: "Wenn auf allen Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802837,
				tcgplayer: 614384
			}
		}
	]
}

export default card

