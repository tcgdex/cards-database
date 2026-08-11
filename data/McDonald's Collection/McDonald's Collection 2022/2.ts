import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [722],

	hp: 50,

	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sky Circus"
			},
			effect: {
				en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon's attack costs"
			}
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Wind Shard",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			}
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670467,
				tcgplayer: 281473
			}
		}
	]
}

export default card

