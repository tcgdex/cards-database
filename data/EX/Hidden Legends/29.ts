import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		de: "Tanhel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Call",
				fr: "Appel magnétique",
				de: "Magnetic Call"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Water Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.\"",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez un Pokémon de base  dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Terhal est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a  Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Charge",
				fr: "Attaque métallique",
				de: "Metal Charge"
			},
			effect: {
				en: "Put 1 damage counter on Beldum.",
				fr: "Placez 1 marqueur de dégât sur Terhal.",
				de: "Put 1 damage counter on Beldum."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276102,
		tcgplayer: 83782
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "holo",
			stamp: ["gym-challenge"]
		}
	]
}

export default card
