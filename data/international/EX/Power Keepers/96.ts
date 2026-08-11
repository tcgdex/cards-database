import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Salamence ex",
		'fr-fr': "Drattak ex",
		'de-de': "Brutalanda ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Volcanic Flame",
				'fr-fr': "Flamme volcanique",
				'de-de': "Vulkanfeuer"
			},
			effect: {
				'en-us': "Discard the top 5 cards from your deck.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Wave",
				'fr-fr': "Hydro-vague",
				'de-de': "Hydrowelle"
			},
			effect: {
				'en-us': "Discard all Water Energy attached to Salamence ex. This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toutes les Énergies  attachées à Drattak ex. Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Lege alle -Energie, die an Brutalanda ex angelegt ist, auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277402,
		tcgplayer: 88904
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

