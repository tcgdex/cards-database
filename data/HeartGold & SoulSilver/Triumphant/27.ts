import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		de: "Magbrant"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Top Burner",
				fr: "Super pyro",
				de: "Top-Burner"
			},
			effect: {
				en: "For each Fire Energy attached to Magmortar, discard the top card from your opponent’s deck. Then, flip a coin. If tails, discard all Fire Energy attached to Magmortar.",
				fr: "Pour chaque carte Énergie Fire attachée à Maganon, défaussez la carte du dessus du deck de votre adversaire. Lancez ensuite une pièce. Si c’est pile, défaussez toutes les cartes Énergie Fire attachées à Maganon.",
				de: "Lege für jede an Magbrant angelegte -Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wirf anschließend eine Münze. Bei \"Zahl\" lege alle an Magbrant angelegten -Energien auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burst Punch",
				fr: "Poing d’enfer",
				de: "Explosionshieb"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It blasts fireballs of over 3,600 degrees Fahrenheit out of its arms. Its breath also sears and sizzles."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279557,
		tcgplayer: 87060
	}
}

export default card
