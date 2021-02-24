import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		703,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Diamond Gate",
				fr: "Portail Diamantin",
			},
			effect: {
				en: "Search your deck for a Supporter card and a Stadium card, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Supporter et une carte Stade dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
