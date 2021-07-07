import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wing Buzz",
				fr: "Bourdonnement d'Aile",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a card from your hand. If you do, discard the top card of your opponent’s deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte de votre main. Dans ce cas, défaussez la carte du dessus du deck de votre adversaire.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Afterimage Assault",
				fr: "Attaque Invisible",
			},
			effect: {
				en: "Search your deck for up to 2 Ninjask and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Ninjask dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
