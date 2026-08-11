import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		de: "Voltrean"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [941],

	hp: 120,

	types: ["Lightning"],

	stage: "Stage1",

	evolveFrom: {
		en: "Wattrel",
		fr: "Zapétrel",
		es: "Wattrel",
		it: "Wattrel",
		pt: "Wattrel",
		de: "Voltrel"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Skill Dive",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				en: "Thunder Blast",
			},
			effect: {
				en: "Discard a Lightning Energy from this Pokémon",
			},
			damage: 140,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
				cardmarket: 725425,
				tcgplayer: 516519
			}
		}
	]
}

export default card

