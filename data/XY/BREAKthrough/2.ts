import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		it: "Parasect",
		pt: "Parasect",
		de: "Parasek"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
		es: "Paras",
		it: "Paras",
		pt: "Paras",
		de: "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Colorful Spores",
				fr: "Spores Colorées",
				es: "Esporas de Colores",
				it: "Sporarcobaleno",
				pt: "Esporos Coloridos",
				de: "Bunte Sporen"
			},
			effect: {
				en: "Choose 3 of your Pokémon. For each of those Pokémon, search your deck for a different type of basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez 3 de vos Pokémon. Pour chacun de ces Pokémon, cherchez une carte Énergie de base de type différent dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
				es: "Elige 3 de tus Pokémon. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía Básica de tipo diferente y únela a ese Pokémon. Baraja las cartas de tu baraja después.",
				it: "Scegli tre dei tuoi Pokémon. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base di tipo diverso e assegnagliela. Poi rimischia le carte del tuo mazzo.",
				pt: "Escolha 3 dos seus Pokémon. Para cada um destes Pokémon, procure em seu baralho um tipo diferente de card de Energia básica e ligue-o a aquele Pokémon. Em seguida, embaralhe seus cards.",
				de: "Wähle 3 deiner Pokémon im Spiel. Durchsuche dein Deck nach jeweils 1 vom Typ her anderen Basis-Energiekarte für jedes dieser Pokémon und lege sie an diese Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 286248,
		tcgplayer: 107121
	}
}

export default card
