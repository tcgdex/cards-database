import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Quilava",
		fr: "Feurisson obscur",
		de: "Dunkles Igelavar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Incinerate",
				fr: "Incinération",
				de: "Einäschern"
			},
			effect: {
				en: "Show the top card of your opponent's deck to all players. If it's a Trainer card, discard it.",
				fr: "Montrez la carte du dessus du deck de votre adversaire à tous les joueurs, si c'est une carte Dresseur, défaussez-vous en.",
				de: "Zeige die oberste Karte deines Decks deines Gegners allen Spielern. Wenn es eine Trainer-Karte ist, lege diese auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],

			name: {
				en: "Rushing Magma",
				fr: "Flot de magma",
				de: "Fließendes Magma"
			},

			effect: {
				en: "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Energy card you discarded in this way.",
				fr: "Défaussez-vous des 5 premières cartes du dessus de votre deck. (Si vous avez moins de 5 cartes dans votre deck, défaussez-vous de toutes.) Cette attaque inflige 20 dégâts pour chaque carte Énergie  défaussée de cette manière.",
				de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. (Wenn weniger als 5 Karten in deinem Deck sind, lege sie alle ab.) Dieser Angriff fügt für jede so abgeworfene -Energiekarte 20 Schadenspunkte zu."
			},

			damage: "20x"
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "S'il tourne le dos à son adversaire, c'est signe qu'il se prépare à attaquer."
	}
}

export default card
