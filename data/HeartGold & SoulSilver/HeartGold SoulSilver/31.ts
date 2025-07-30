import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Heliatronc",
		de: "Sonnflora"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sunshine Grace",
				fr: "Grâce solaire",
				de: "Sonnenmut"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can’t be used if Sunflora is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer à votre adversaire et l’ajouter à votre main. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Heliatronc est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 -Pokémon durchsuchen, es deinem Gegner zeigen und auf die Hand nehmen. Mische anschließend dein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Sonnflora von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blade Arms",
				fr: "Bras tranchants",
				de: "Klingenarme"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		en: "It converts sunlight into energy. In the darkness after sunset, it closes its petals and becomes still."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279003
	}
}

export default card
