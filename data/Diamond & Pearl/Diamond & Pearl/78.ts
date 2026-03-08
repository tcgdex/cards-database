import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Melo",
		de: "Pii"
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
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Melofée de votre main sur Melo (vous le faites ainsi évoluer) et retirer à Melo tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Piepi von deiner Hand auf Pii legen (das zählt als Entwickeln von Pii). Entferne alle Schadensmarken von Pii."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Eeek",
				fr: "Beurk",
				de: "Piiieps"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
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
		fr: "Sa silhouette rappelle une étoile. On dit qu'il descend sur terre en chevauchant une étoile filante."
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
