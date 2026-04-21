import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
		es: "Sandaconda",
		it: "Sandaconda",
		pt: "Sandaconda",
		de: "Sanaconda"
	},

	illustrator: "Yuya Oka",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [844],

	hp: 140,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				en: "Skull Bash",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				en: "Sandstorm Spray",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. If you discarded any Energy in this way, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725427,
				tcgplayer: 516521
			}
		}
	]
}

export default card

