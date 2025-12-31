import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Smog",
				fr: "Purédpois",
				de: "Smog"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hoodwink",
				fr: "Duper",
				de: "Reinlegen"
			},
			effect: {
				en: "You may search your opponent's discard pile for up to 3 in any combination of Trainer, Supporter, or Stadium cards and put them into your opponent's hand.",
				fr: "Vous pouvez choisir dans la pile de défausse de votre adversaire une combinaison de jusqu'à 3 cartes Dresseur, Supporter ou Stade et les placer dans la main de votre adversaire.",
				de: "Du kannst den Ablagestapel deines Gegners nach bis zu 3 Karten in beliebiger Kombination aus Trainer-, Unterstützer- und Stadion-Karten durchsuchen. Dein Gegner nimmt diese Karten auf die Hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il peut traverser n'importe quel obstacle. Il rôde dans les murs pour surveiller ses ennemis."
	},

	thirdParty: {
		cardmarket: 278338,
		tcgplayer: 86028
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
	]
}

export default card
