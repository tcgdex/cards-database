import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou",
		'de-de': "Fluffeluff"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff) and remove all damage counters from Igglybuff.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Rondoudou de votre main sur Toudoudou (vous le faites ainsi évoluer) et retirer à Toudoudou tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Pummeluff von deiner Hand auf Fluffeluff legen (das zählt als Entwickeln von Fluffeluff). Entferne alle Schadensmarken von Fluffeluff."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Inquire",
				'fr-fr': "Se renseigner",
				'de-de': "Nachfragen"
			},
			effect: {
				'en-us': "Draw a card. If you didn't play any Supporter card from your hand during this turn, draw 2 more cards.",
				'fr-fr': "Piochez une carte. Si vous n'avez pas joué de cartes Supporter de votre main ce tour-ci, piochez 2 cartes supplémentaires.",
				'de-de': "Ziehe 1 Karte. Wenn du in diesem Zug keine Unterstützerkarten von deiner Hand gespielt hast, ziehe 2 weitere Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a soft and bouncy body. Once it starts bouncing, it becomes impossible to stop.",
	},

	thirdParty: {
		cardmarket: 277972,
		tcgplayer: 86262
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
