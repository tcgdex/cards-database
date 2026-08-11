import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Poison Structure",
				'fr-fr': "Structure poison",
				'de-de': "Giftige Struktur"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Sidney's Stadium is in play, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Cacturne is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Stade de Damien est en jeu, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Cacturne est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), wenn Ulrichs Stadion im Spiel ist, kannst du 1 Verteidigendes Pokémon wählen. Dieses Pokémon ist jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Noktuska von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-nuée",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277333,
		tcgplayer: 84079
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		}
	]
}

export default card
