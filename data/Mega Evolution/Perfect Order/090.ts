import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Brindibou",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Trouver un Ami",
			},
			effect: {
				fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Charge",
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "ryoma uratsuka",

	thirdParty: {
		cardmarket: 877507
	}
}

export default card
