import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Raflésia",
		'de-de': "Giflor"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [45],

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
				'en-us': "Poison Pollen",
				'fr-fr': "Pollen toxik",
				'de-de': "Gift-Pollen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Raflésia est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Diese Fähigkeit kann nicht verwendet werden, falls Giflor von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Petal Dance",
				'fr-fr': "Danse-fleur",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Raflésia est maintenant Confus.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Giflor ist jetzt verwirrt."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90379,
				cardmarket: 274906
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90379,
				cardmarket: 274906
			},
		},
	],
}

export default card
