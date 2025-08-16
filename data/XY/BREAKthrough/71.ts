import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		527,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
				fr: "Flair",
				es: "Rastreo",
				it: "Segugio",
				pt: "Farejador",
				de: "Schnüffler"
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
				es: "Lanza 1 moneda. Si sale cara, pon 1 carta de tu pila de descartes en tu mano.",
				it: "Lancia una moneta. Se esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Jogue uma moeda. Se sair cara, coloque um card da sua pilha de descarte em sua mão.",
				de: "Wirf 1 Münze. Bei \"Kopf\" nimm 1 Karte von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286317,
		tcgplayer: 107190
	}
}

export default card
