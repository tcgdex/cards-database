import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wynaut",
		fr: "Okeoke",
		de: "Isso"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		360,
	],

	hp: 50,

	types: [
		"Psychic",
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
				en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut), and remove all damage counters from Wynaut.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer Qulbutoké de votre main sur Okeoke (vous faites ainsi évoluer Okeoke). Retirez à Okeoke tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du Woingenau von deiner Hand auf Isso legen (das zählt als Entwickeln von Isso). Entferne alle Schadensmarken von Isso."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Alluring Smile",
				fr: "Sourire attractif",
				de: "Verlockendes Lächeln"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon card or Evolution card for each Energy attached to Wynaut, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base ou une carte Évolution pour chaque Énergie attachée à Okeoke. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck für jede Energie, die an Isso angelegt ist, nach einer Basis-Pokémon oder Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275831,
		tcgplayer: 90654
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
