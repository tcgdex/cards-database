import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Shaymin",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Envoi de Fleurs",
			},
			effect: {
				fr: "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon Plante de Banc. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Enjambée de Feuillage",
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
	regulationMark: "J",
	illustrator: "saino misaki",

	thirdParty: {
		cardmarket: 877415
	}
}

export default card
