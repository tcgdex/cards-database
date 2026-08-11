import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Kilowattrel",
		'fr-fr': "Fulgulairo",
		'es-es': "Kilowattrel",
		'it-it': "Kilowattrel",
		'pt-br': "Kilowattrel",
		'de-de': "Voltrean"
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
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Skill Dive",
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'en-us': "Thunder Blast",
			},
			effect: {
				'en-us': "Discard a Lightning Energy from this Pokémon",
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

