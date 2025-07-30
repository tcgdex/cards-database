import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Second Sight",
				fr: "Seconde vue",
				de: "Zweites Gesicht"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 3 cards of either player’s deck and put them back on top of that player’s deck in any order. This power can’t be used if Slowking is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus du deck de n’importe quel joueur et les y replacer dans l’ordre de votre choix. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 3 Karten eines Decks anschauen und sie danach in beliebiger Reihenfolge wieder auf das Deck des Spielers zurücklegen. Diese Poké-Power kann nicht benutzt werden, wenn Laschoking von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
		en: "It has incredible intellect and intuition. Whatever the situation, it remains calm and collected."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278984,
		tcgplayer: 89317
	}
}

export default card
