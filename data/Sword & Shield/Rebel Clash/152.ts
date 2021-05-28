import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Greedent",
		fr: "Rongrigou"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Greedy Tail",
				fr: "Queue Cupide"
			},
			effect: {
				en: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Colorless"],
	regulationMark: "D"
}

export default card
