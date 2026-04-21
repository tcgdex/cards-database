import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		de: "Knogga"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire",
				de: "Blitzsturm"
			},

			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Lege bei \"Zahl\" 2 Schadensmarken auf Zapdos."
			},

			damage: 60
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Vengeance",
				de: "Linear Attack"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de base et chaque carte Évolution dans votre pile de défausse. Vous ne pouvez pas infliger plus de 60 dégâts de cette façon.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to thad Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276183,
		tcgplayer: 87226
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
