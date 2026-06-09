import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 80,

	types: ["Psychic"],

	stage: "Stage1",

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},
			damage: 30,
		},
		{
			cost: ["Psychic"],
			name: {
				en: "Phychic",
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
			},
			damage: 20,
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,
	
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725432,
				tcgplayer: 516526
			}
		}
	]
}

export default card

