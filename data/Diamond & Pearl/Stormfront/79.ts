import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Treecko",
		fr: "Arcko"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		fr: "Arcko",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Friends",
				fr: "À la rescousse !",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Ses plantes de pieds sont couvertes d'épines qui lui permettent de marcher au mur et au plafond"
	}
}

export default card
