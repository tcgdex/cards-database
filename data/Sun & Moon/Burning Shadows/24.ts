import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "Flip 2 coins. For each heads, put a card from your discard pile into your hand.",
				fr: "Lancez 2 pièces. Pour chaque côté face, ajoutez une carte de votre pile de défausse à votre main.",
				es: "Lanza 2 monedas. Por cada cara, pon 1 carta de tu pila de descartes en tu mano.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Jogue 2 moedas. Para cada cara, coloque 1 carta da sua pilha de descarte na sua mão.",
				de: "Wirf 2 Münzen. Nimm pro Kopf 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				es: "Llama Abrasadora",
				it: "Fiamme Ustionanti",
				pt: "Chama Cauterizante",
				de: "Sengende Flammen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299430,
		tcgplayer: 138502
	}
}

export default card
