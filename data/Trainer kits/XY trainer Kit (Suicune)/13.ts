import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [118],
	set: Set,

	name: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		it: "Goldeen",
		pt: "Goldeen",
		de: "Goldini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Étincelle Surprise",
			},
			effect: {
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},
			damage: "40",
		},
	],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118848
	}
}

export default card