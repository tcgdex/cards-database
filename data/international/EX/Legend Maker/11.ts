import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'de-de': "Sleimok"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stench",
				'fr-fr': "Puanteur",
				'de-de': "Duftnote"
			},
			effect: {
				'en-us': "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.",
				'fr-fr': "Tant que Grotadmorv est votre Pokémon Actif, les Pokémon de chaque joueur ne peuvent pas utiliser de Poké-Powers.",
				'de-de': "Solange Sleimok dein Aktives Pokémon ist, können Pokémon aller Spieler keine Poké-Power benutzen."
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
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de poison",
				'de-de': "Giftring"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurück ziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Décision vaseuse",
				'de-de': "Schleimwurf"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276888,
		tcgplayer: 87622
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
