import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull Out",
				fr: "Déracinement",
				de: "Herausziehen"
			},
			effect: {
				en: "Put a card from your discard pile on top of your deck.",
				fr: "Mettez une carte de votre pile de défausse sur le dessus de votre deck.",
				de: "Lege 1 beliebige Karte von deinem Ablagestapel auf dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Head",
				fr: "Tête de Fer",
				de: "Eisenschädel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Durant dig nests in mountains. They build their complicated, interconnected tunnels into mazes.",
		de: "Es hebt ein komplexes Tunnelsystem im Berginneren aus und nutzt dieses Labyrinth als seinen Bau."
	},

	thirdParty: {
		cardmarket: 280522,
		tcgplayer: 85021
	}
}

export default card
