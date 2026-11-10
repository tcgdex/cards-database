import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		it: "Gastly",
		de: "Nebulak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lick",
				fr: "Léchouille",
				it: "Leccata",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Energy Conversion",
				fr: "Conversion d'Énergie",
				it: "Conversione di Energia",
				de: "Energieverwandlung"
			},
			effect: {
				en: "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
				fr: "Placez jusqu'à 2 cartes Énergie de votre pile de défausse dans votre main. Fantominus s'inflige 10 dégâts.",
				it: "Prendi fino a 2 carte Energia dalla tua pila degli scarti e aggiungile alla tua mano. Gastly si infligge 10 danni.",
				de: "Nimm bis zu zwei Energiekarten von deinem Ablagestapel auf deine Hand. Nebulak fügt sich selbst 10 Schadenspunkte zu."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "A mysterious Pokémon. Some say it is a lifeform from another dimension, while other believe it is formed from smog.",
		fr: "Un Pokémon mystérieux. Certains pensent qu'il vient d'une autre dimension, d'autres croient qu'il est formé de brouillard.",
		it: "Si tratta di un Pokémon misterioso. Alcuni sostengono che provenga da un'altra dimensione, altri che si tratti solo di smog.",
		de: "Ein geheimnisvolles Pokémon. Man sagt, es handele sich um eine Lebensform aus einer anderen Dimension, während andere glauben, dass es aus Smog entstand."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273894,
				tcgplayer: 44435
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273894,
				tcgplayer: 44435
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273894,
				tcgplayer: 44435
			}
		},
	],
}

export default card
