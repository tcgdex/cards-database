import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		es: "Carracosta",
		it: "Carracosta",
		pt: "Carracosta",
		de: "Karippas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		565,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
		de: "Galapaflos"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fossil Clutch",
				fr: "Munition Fossile",
				de: "Fossil-Zange"
			},
			effect: {
				en: "You may discard an Item card that has Fossil in its name from your hand. If you do, this attack does 50 more damage.",
				fr: "Vous pouvez défausser une carte Objet qui a Fossile dans son nom de votre main. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
				de: "Du kannst 1 Itemkarte, die das Wort „Fossil“ in ihrem Namen enthält, auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				de: "Kaskade"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "It could knock out a foe with a slap from one of its developed front appendages and chew it up, shell or bones and all.",
		de: "Ein Schlag mit seinen ausgeprägten Vorderflossen brachte Gegner zu Fall und brach ihre Knochen oder Schale."
	},

	thirdParty: {
		cardmarket: 281049,
		tcgplayer: 84110
	}
}

export default card
