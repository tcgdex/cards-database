import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 150,

	types: ["Colorless"],

	stage: "Stage2",

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Busybody Nurse"
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions."
			}
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Happy Cyclone",
			},
			effect: {
				en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon."
			},
			damage: 150,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725429,
				tcgplayer: 516523
			}
		}
	]
}

export default card

