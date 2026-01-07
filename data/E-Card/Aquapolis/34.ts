import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bursting Hand",
				fr: "Main explosive",
				de: "Platzende Hand"
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 10 damage times the number of Energy cards there.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 10 dégâts multipliés par le nombre de cartes Énergie qui s'y trouvent.",
				de: "Schau dir die Karten auf der Hand deines Gegners an. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl Energiekarten, die er auf der Hand hat, zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shuffle Attack",
				fr: "Attaque déconcertante",
				de: "Mischattacke"
			},
			effect: {
				en: "Look at a number of cards on top of your opponent's deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent's deck.",
				fr: "Regardez un nombre de cartes égal au nombre de cartes Énergie attachées au Pokémon Défenseur au-dessus du deck de votre adversaire. Mélangez ces cartes dans n'importe quel ordre, puis replacez-les au-dessus du deck de votre adversaire.",
				de: "Schaue dir soviele Karten oben vom Deck deines Gegners an, wie Energiekarten an das Verteidigende Pokémon angelegt sind. Sortiere diese Karten beliebig und lege sie dann oben auf das Deck deines Gegners zurück."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275047,
		tcgplayer: 89313
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
