import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnezone",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Search",
				fr: "Recherche magnétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Lightning or Metal Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Magnezone is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon Lightning ou Metal. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Speed Shot",
				fr: "Coup d'boost",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crush Volt",
				fr: "Écras'volt",
			},
			effect: {
				en: "Discard an Energy attached to Magnezone.",
				fr: "Défaussez une Énergie attachée à Magnézone.",
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
