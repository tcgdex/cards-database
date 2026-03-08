import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Azurill",
		fr: "Azurill",
		de: "Azurill"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		298,
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
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Marill de votre main sur Azurill (vous le faites ainsi évoluer) et retirer à Azurill tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Marill von deiner Hand auf Azurill legen (das zählt als Entwickeln von Azurill). Entferne alle Schadensmarken von Azurill."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Type Match",
				fr: "Type combo",
				de: "Passender Typ"
			},
			effect: {
				en: "Choose a basic Energy card in your hand and show it to your opponent. Then, search your deck for a Basic Pokémon or Evolution card of that Energy type, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre main une carte Énergie de base et montrez-la à votre adversaire. Ensuite, choisissez dans votre deck un Pokémon de base ou une carte Évolution du même type d'Énergie, montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck.",
				de: "Wähle eine Basis-Energiekarte von deiner Hand und zeige sie deinem Gegner. Danach durchsuche dein Deck nach einem Basis-Pokémon oder einer Evolutionskarte, die diesem Energietyp entspricht, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
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
		cardmarket: 276783,
		tcgplayer: 83689
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

