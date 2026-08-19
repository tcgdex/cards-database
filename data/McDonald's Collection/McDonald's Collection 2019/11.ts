import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Megumi Mizutani",
	category: "Pokemon",

	dexId: [51],

	description: {
		en: "These Pokémon are cherished in the Alola region, where they are thought to be feminine deities of the land incarnate.",
		de: "Man hält es für die Verkörperung der Göttinnen des Landes. In der Alola-Region wird es daher außerordentlich geschätzt."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gold Rush",
			de: "Goldrausch"
		},

		damage: "30×",

		effect: {
			en: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way.",
			de: "Lege beliebig viele {M}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
		}
	}],

	name: {
		en: "Alolan Dugtrio",
		de: "Alola-Digdri"
	},

	rarity: "None",
	hp: 60,
	types: ["Metal"],

	weaknesses: [
		{
			type: "Fire",
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
				cardmarket: 412899,
				tcgplayer: 200976
			}
		}
	]
}

export default card

