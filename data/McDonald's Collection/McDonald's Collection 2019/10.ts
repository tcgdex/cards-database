import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [52],

	description: {
		en: "When its delicate pride is wounded, or when the gold coin on its forehead is dirtied, it flies into a hysterical rage.",
		de: "Verletzt man seinen großen Stolz oder macht die Münze an seiner Stirn schmutzig, so verfällt es in eine wahnsinnige Hysterie."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spoil the Fun",
			de: "Spielverderber"
		},

		damage: "10+",

		effect: {
			en: "If you go second, this attack does 60 more damage during your first turn.",
			de: "Wenn du als Zweiter am Zug bist, fügt diese Attacke während deines ersten Zuges 60 Schadenspunkte mehr zu."
		}
	}],

	name: {
		en: "Alolan Meowth",
		de: "Alola-Mauzi"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412894,
				tcgplayer: 200975
			}
		}
	]
}

export default card

