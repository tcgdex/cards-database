import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		de: "Entei"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Burning Coat",
				fr: "Manteau brûlant",
				de: "Brennender Mantel"
			},
			effect: {
				en: "Whenever 1 of your opponent's Pokémon is Knocked Out by damage from Entei's attacks, discard the top 3 cards from your opponent's deck.",
				fr: "Lorsqu'1 des Pokémon de votre adversaire est mis K.O par des dégâts infligés par des attaques d'Entei, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				de: "Wenn 1 Pokémon deines Gegners durch Schaden eines Angriffs von Entei kampfunfähig wird, lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Blaze Roar",
				fr: "Flammes rugissantes",
				de: "Flammengebrüll"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, discard 2 Fire Energy attached to Entei.",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est pile, défaussez 2 cartes Énergie Fire attachées à Entei.",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf 1 Münze. Bei \"Zahl\" lege 2 an Entei angelegte -Energiekarten auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277757,
		tcgplayer: 85272
	}
}

export default card
