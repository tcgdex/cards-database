import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Ecremeuh",
		de: "Miltank"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
				de: "Thick Fat"
			},
			effect: {
				en: "Any damage done to Miltank by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Ecremeuh par des attaques de Pokémon  et  sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Miltank by attacks from  Pokémon and  Pokémon is reduced by 30 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Milk",
				fr: "Lait guérisseur",
				de: "Healing Milk"
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				de: "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276688,
		tcgplayer: 87463
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
