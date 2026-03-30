import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Cocotine",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	stage: "Stage1",
	evolveFrom: {
		fr: "Fluvetin",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Collection de Parfums",
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Cherchez dans votre deck jusqu'à 2 cartes Énergie Psy de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Vampibaiser",
			},
			damage: "50",
			effect: {
				fr: "Soignez 30 dégâts de ce Pokémon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Mori Yuu",

	thirdParty: {
		cardmarket: 877450
	}
}

export default card
