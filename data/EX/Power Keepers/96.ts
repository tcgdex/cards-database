import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Salamence ex",
		fr: "Drattak ex",
		de: "Brutalanda ex"
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
		en: "Shelgon",
		fr: "Drackhaus"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volcanic Flame",
				fr: "Flamme volcanique",
				de: "Vulkanfeuer"
			},
			effect: {
				en: "Discard the top 5 cards from your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
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
				en: "Hydro Wave",
				fr: "Hydro-vague",
				de: "Hydrowelle"
			},
			effect: {
				en: "Discard all Water Energy attached to Salamence ex. This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les Énergies  attachées à Drattak ex. Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Lege alle -Energie, die an Brutalanda ex angelegt ist, auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

