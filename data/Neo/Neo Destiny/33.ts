import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Exeggutor",
		fr: "Noadkoko obscur",
		de: "Dunkles Kokowei"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Headbutt",
				fr: "Triple coup d'boule",
				de: "Dreifache Kopfnuss"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "MAX Burst",
				fr: "Explosion maximale",
				de: "Maxi-Explosion"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon de votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf so viele Münzen, wie Energiekarten an das aktive Pokémon deines Gegners angelegt sind. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "If one of its heads falls off, it turns into an Exeggcute, which begins to look for other Exeggcutes using a special form of telepathy.",
		fr: "S'il perd une de ses deux têtes, il se transforme en Nœunœuf, qui part aussitôt à la recherche d'un autre Nœunœuf grâce à une forme spéciale de télépathie.",
		de: "Wenn einer seiner Köpfe herunterfällt, verwandelt sich dieser in ein Owei, der sofort nach anderen Oweis Ausschau hält und dabei eine Art Telepathie verwendet."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274685
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274685
			}
		}
	]
}

export default card
