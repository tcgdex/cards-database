import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
				de: "Gegenstoß"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 40 damage plus 40 more damage and discard the top 3 cards from your opponent's deck.",
				fr: "S'il ne reste à votre adversaire qu'1 carte Récompense, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires et défausse les 3 cartes du dessus du deck de votre adversaire.",
				de: "Wenn dein Gegner nur noch 1 Preis übrig hat, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu und dein Gegner legt die obersten 3 Karten seines Decks auf seinen Ablagestapel."
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Ground Burn",
				fr: "Brûlure au sol",
				de: "Bodenbrand"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 80 damage plus 20 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 80 dégâts plus 20 dégâts supplémentaires pour chaque Carte Énergie défaussée de cette façon.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Dieser Angriff fügt 80 Schadenspunkte plus 20 weitere Schadenspunkte für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "Lorsqu'il est en colère, il abat des montagnes et enterre des fleuves. On doit alors modifier les cartes."
	},

	thirdParty: {
		cardmarket: 277646,
		tcgplayer: 90119
	}
}

export default card
