import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Melo",
		'de-de': "Pii"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		173,
	],

	hp: 40,

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
				'en-us': "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Melofée de votre main sur Melo (vous le faites ainsi évoluer) et retirer à Melo tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Piepi von deiner Hand auf Pii legen (das zählt als Entwickeln von Pii). Entferne alle Schadensmarken von Pii."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Eeek",
				'fr-fr': "Beurk",
				'de-de': "Piiieps"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
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
		'en-us': "Its silhouette is like a star. It is believed to arrive riding on shooting stars.",
		'fr-fr': "Sa silhouette rappelle une étoile. On dit qu'il descend sur terre en chevauchant une étoile filante."
	},

	thirdParty: {
		cardmarket: 277577,
		tcgplayer: 84366
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
