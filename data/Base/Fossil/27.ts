import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
		de: "Lavados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Wildfire",
				fr: "Feu sauvage",
				de: "Lauffeuer"
			},
			effect: {
				en: "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
				fr: "Vous pouvez défausser autant de cartes Énergies  attachées à Sulfura que vous le désirez lorsque vous utilisez cette attaque. Défaussez ensuite le même nombre de cartes du sommet du deck de votre adversaire.",
				de: "Du kannst beliebig viele  -Energiekarten von Lavados entfernen. wenn du diesen Angriff einsetzt. Lege danach die gleiche Anzahl der obersten Karten vom Deck deines Gegners auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				en: "Dive Bomb",
				fr: "Bombardement",
				de: "Sturzflugbombadierung"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige aucun dégât.",
				de: "Wirf eine Münze. Bei \"Zahl\" fügt dieser Angriff keine Schadenspunkte zu."
			},

			damage: 80
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "L'oiseau légendaire du feu. Une pluie de flammes surgit à chaque battement de ses ailes."
	},

	thirdParty: {
		cardmarket: 273873,
		tcgplayer: 106529
	}
}

export default card
