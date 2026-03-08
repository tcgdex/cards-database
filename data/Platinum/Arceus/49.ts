import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Wormadam Plant Cloak",
		de: "Burmadame Pflanzenumhang"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],
	
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Burmy Plant Cloak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Magical Needle",
				de: "Zaubernadel"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Benched Pokémon.",
				de: "Entferne 2 Schadensmarken von 1 Pokémon auf deiner Bank."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cloak Scale",
				de: "Umhang-Schuppe"
			},
			effect: {
				en: "If you have Wormadam Sandy Cloak in play, the Defending Pokémon is now Burned, Confused, and Poisoned.",
				de: "Wenn du Burmadame Sandumhang im Spiel hast, ist das Verteidigende Pokémon jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278921,
		tcgplayer: 90641
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
