import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		203,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchronized Search",
				fr: "Recherche synchronisée"
			},
			effect: {
				en: "If Girafarig and the Defending Pokémon have the same amount of Energy attached to them, pick any 1 card from your deck and put it into your hand. Shuffle your deck afterward.",
				fr: "Si Girafarig et le Pokémon Défenseur possèdent le même total en Énergie, choisissez une carte dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Breaking Impact",
				fr: "Impact dévastateur"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Colorless Energy in that Pokémon's Retreat Cost to that Pokémon (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)\"",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque Énergie  de son Coût de retraite (après application des effets sur le Coût de retraite). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc)."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
