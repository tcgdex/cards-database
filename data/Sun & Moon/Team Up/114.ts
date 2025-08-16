import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
		es: "Exeggutor de Alola",
		it: "Exeggutor di Alola",
		pt: "Exeggutor de Alola",
		de: "Alola-Kokowei"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tropical Shake",
				fr: "Balancement Tropical",
				es: "Sacudida Tropical",
				it: "Scossone Tropicale",
				pt: "Balançada Tropical",
				de: "Tropisches Schütteln"
			},
			effect: {
				en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can’t add more than 100 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				es: "Este ataque hace 20 puntos de daño más por cada tipo de carta de Energía Básica diferente en tu pila de descartes. No puedes añadir más de 100 puntos de daño de esta manera.",
				it: "Questo attacco infligge 20 danni in più per ogni tipo di carta Energia base nella tua pila degli scarti. Non puoi aggiungere più di 100 danni in questo modo.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada tipo de carta de Energia básica na sua pilha de descarte. Você não pode adicionar mais de 100 pontos de dano desta forma.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der verschiedenen Basis-Energiekarten-Typen in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 369042,
		tcgplayer: 183901
	}
}

export default card
