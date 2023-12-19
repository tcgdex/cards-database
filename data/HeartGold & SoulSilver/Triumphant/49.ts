import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mapping",
				fr: "Mappage",
				de: "Zuordnung"
			},
			effect: {
				en: "Once during your turn, when you play Porygon2 from your hand to evolve 1 of your Pokémon, you may search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour, lorsque vous jouez Porygon2 dans votre main pour faire évoluer l’un de vos Pokémon, vous pouvez chercher une carte Stade dans votre deck, la montrer à votre adversaire et l’ajouter à votre main. Mélangez ensuite votre deck.",
				de: "Einmal während deines Zuges kannst du, wenn du Porygon2 von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, dein Deck nach 1 Stadion-Karte durchsuchen, sie deinem Gegner zeigen und sie auf die Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "3-D Attack",
				fr: "Attaque en 3-D",
				de: "3-D Attacke"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Further research enhanced its abilities. Sometimes, it may exhibit motions that were not programmed."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
