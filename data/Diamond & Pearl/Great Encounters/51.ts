import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		369,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Primal Calling",
				fr: "Appel primitif",
			},
			effect: {
				en: "Search your deck for up to 3 Trainer cards that have Fossil in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 cartes Dresseur dont le nom comporte Fossile, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Swirl",
				fr: "Tourbillon dodo",
			},
			effect: {
				en: "Both Relicanth and the Defending Pokémon are now Asleep.",
				fr: "Relicanth et le Pokémon Défenseur sont maintenant Endormis.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
