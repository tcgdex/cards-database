import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok"
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
		en: "Grimer",
		fr: "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stench",
				fr: "Puanteur",
				de: "Duftnote"
			},
			effect: {
				en: "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Grotadmorv est votre Pokémon Actif, les Pokémon de chaque joueur ne peuvent pas utiliser de Poké-Powers.",
				de: "Solange Sleimok dein Aktives Pokémon ist, können Pokémon aller Spieler keine Poké-Power benutzen."
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
				en: "Poison Ring",
				fr: "Anneau de poison",
				de: "Giftring"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurück ziehen."
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
				en: "Sludge Toss",
				fr: "Décision vaseuse",
				de: "Schleimwurf"
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
