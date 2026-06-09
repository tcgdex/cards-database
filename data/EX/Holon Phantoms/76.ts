import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Pichu δ",
		fr: "Pichu δ",
		de: "Pichu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 50,

	types: [
		"Metal",
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
				en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Pikachu von deiner Hand auf Pichu legen (das zählt als Entwickeln von Pichu). Entferne alle Schadensmarken von Pichu."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paste",
				fr: "Coller",
				de: "Ankleben"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to 1 of your Pokémon that has δ on its card.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à 1 de vos Pokémon possédant le symbole δ.",
				de: "Durchsuche deinen Ablagestapel nach einer Energiekarte und lege sie an 1 deiner Pokémon, auf dem δ zu sehen ist, an."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277046
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
