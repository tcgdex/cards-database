import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Buizel",
		de: "Bamelin"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	dexId: [
		418,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	effect: {
		en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
	},

	attacks: [{
		name: {
			de: "Herumspritzen"
		},

		damage: "10+",

		effect: {
			de: "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Bamelin, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
		},

		cost: ["Water"]
	}],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
