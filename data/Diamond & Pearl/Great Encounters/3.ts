import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Reach Over",
				fr: "Bras tendu",
			},
			effect: {
				en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Darkness Pursuit",
				fr: "Poursuite obscure",
			},
			effect: {
				en: "If the Defending Pokémon is Cresselia, this attack's base damage is 100.",
				fr: "Si le Pokémon Défenseur est Cresselia, les dégâts de base de cette attaque sont de 100.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
