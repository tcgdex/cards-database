import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Bellossom",
		'fr-fr': "Joliflor",
		'de-de': "Blubella"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [182],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Flower Supplement",
				'fr-fr': "Engrais",
				'de-de': "Blumenschlepper"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, attachez une carte Énergie de base de votre main sur un des Pokémon de votre Banc. Ce pouvoir ne peut pas être utilisé si Joliflor est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Lege bei 'Kopf' 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon auf deiner Bank an. Diese Fähigkeit kann nicht verwendet werden, falls Blubella von einem Speziellen Zustand betroffen ist."
			}
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
				'en-us': "Knife Leaf",
				'fr-fr': "Coupe-feuille",
				'de-de': "Messerblatt"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83797,
				cardmarket: 275077
			}
		},
	]
}

export default card
