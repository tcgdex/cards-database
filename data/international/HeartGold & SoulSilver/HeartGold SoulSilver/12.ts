import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'de-de': "Laschoking"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [199],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Second Sight",
				'fr-fr': "Seconde vue",
				'de-de': "Zweites Gesicht"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 3 cards of that player's deck and put them back on top of that player's deck in any order. This power can't be used if Slowking is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus du deck de n’importe quel joueur et les y replacer dans l’ordre de votre choix. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 3 Karten eines Decks anschauen und sie danach in beliebiger Reihenfolge wieder auf das Deck des Spielers zurücklegen. Diese Poké-Power kann nicht benutzt werden, wenn Laschoking von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psychoschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has incredible intellect and intuition. Whatever the situation, it remains calm and collected."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89317,
				cardmarket: 278984
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89317,
				cardmarket: 278984
			}
		},
	],

}

export default card
