import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Twin Play",
				fr: "Duo",
			},
			effect: {
				en: "Search your deck for up to 2 Scyther and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Insécateur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
