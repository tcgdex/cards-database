import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
		de: "Mampfaxo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		446,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et retirer à Goinfrex tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Relaxo von deiner Hand auf Mampfaxo legen (das zählt als Entwickeln von Mampfaxo). Entferne alle Schadensmarken von Mampfaxo."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heave",
				fr: "Soulèvement",
				de: "Hochheben"
			},
			effect: {
				en: "Discard 2 cards from your hand. (If you can't discard 2 cards, this attack does nothing.) Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, cette attaque est sans effet.) Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten auf den Ablagestapel legen kannst, hat dieser Angriff keine Auswirkungen.) Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		fr: "Il avale son poids en nourriture chaque jour. Il avale tout sans prendre le temps de mâcher."
	},

	thirdParty: {
		cardmarket: 277532,
		tcgplayer: 87637
	}
}

export default card
