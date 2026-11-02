import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		52,
	],
	set: Set,
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d'Alola",
		de: "Alola-Mauzi"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				de: "Kratzfurie"
			},
			damage: "10×",
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
		},
	],

	illustrator: "Kagemaru Himeno",
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301850,
				tcgplayer: 152688
			}
		}
	]
}

export default card

