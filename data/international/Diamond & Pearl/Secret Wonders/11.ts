import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'de-de': "Papungha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cotton Spore",
				'fr-fr': "Spore coton",
				'de-de': "Cotton Spore"
			},
			effect: {
				'en-us': "Whenever Jumpluff would be damaged by your opponent's attack, flip a coin. If heads, prevent all damage done to Jumpluff by that attack.",
				'fr-fr': "Lorsqu'une attaque de votre adversaire inflige des dégâts à Cotovol, lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Cotovol par cette attaque.",
				'de-de': "Whenever Jumpluff would be damaged by your opponent's attack, flip a coin. If heads, prevent all damage done to Jumpluff by that attack."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Cottonweed Punch",
				'fr-fr': "Poing de coton",
				'de-de': "Cottonweed Punch"
			},
			effect: {
				'en-us': "Flip 2 coins. Choose 1 of your opponent's Pokémon. For each heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez 2 pièces. Choisissez 1 des Pokémon de votre adversaire. Pour chaque face, cette attaque lui infige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
				'de-de': "Flip 2 coins. Choose 1 of your opponent's Pokémon. For each heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "Blown by seasonal winds, it circles the globe, scattering cotton spores as it goes.",
	},

	thirdParty: {
		cardmarket: 277764,
		tcgplayer: 86366
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
