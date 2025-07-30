import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [162],

	name: {
		en: "Furret",
		fr: "Fouinar",
		es: "Furret",
		it: "Furret",
		pt: "Furret",
		de: "Wiesenior"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
		es: "Sentret",
		it: "Sentret",
		pt: "Sentret",
		de: "Wiesor"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feelin' Fine",
				fr: "Mode Cool",
				es: "Buen Rollito",
				it: "Tuttobene",
				pt: "Sensação Boa",
				de: "Wohl fühlen"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-Queue",
				es: "Coletazo",
				it: "Coda Esplosiva",
				pt: "Pancada de Cauda",
				de: "Schwanzschmetterer"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter."
	},

	thirdParty: {
		cardmarket: 483559
	}
}

export default card
