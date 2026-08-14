import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Magcargo ex",
		fr: "Volcaropod ex",
		de: "Magcargo ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [219],

	hp: 100,

	stage: "Basic",
	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Melting Mountain",
				fr: "Montagne fondante",
				de: "Schmelzender Berg"
			},
			effect: {
				en: "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex.",
				fr: "Défaussez la première carte de votre deck. Si cette carte est une carte Énergie de base, attachez-la à Volcaropod ex.",
				de: "Lege die oberste Karte von deinem Deck auf deinen Ablagestapel. Falls diese Karte eine Energiekarte ist, lege sie an Magcargo ex an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Flow",
				fr: "Torrent de lave",
				de: "Lavaschub"
			},
			effect: {
				en: "You may discard any number of basic Energy cards attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie de base attachées à Volcaropod ex que vous le voulez lorsque vous utilisez cette attaque. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie de base que vous défaussez.",
				de: "Du kannst eine beliebige Anzahl an Magcargo ex angelegte Basis-Energiekarten auf deinen Ablagestapel legen, wenn du diesen Angriff verwendest. Wenn du das machst, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte Basis-Energiekarte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87019,
				cardmarket: 275972
			},
		},
	],

}

export default card
