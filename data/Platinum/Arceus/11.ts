import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Toxicroak",
		de: "Toxiquak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],
	
	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Croagunk",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Corner",
				de: "Bedrängen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Convert Blow",
				de: "Umwandlungsschlag"
			},
			effect: {
				en: "If Toxicroak has any Psychic Energy attached to it, the Defending Pokémon is now Poisoned. If Toxicroak has any Fighting Energy attached to it, this attack does 30 damage plus 30 more damage.",
				de: "Wenn an Toxiquak mindestens 1 -Energie angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet. Wenn an Toxiquak mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278883,
		tcgplayer: 90009
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
