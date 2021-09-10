import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		pt: "Weezing",
		de: "Smogmog"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Balloon Bomb",
				fr: "Bombe Ballon",
				es: "Bomba Globo",
				it: "Pallone Bomba",
				pt: "Balão Bomba",
				de: "Ballonbombe"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent’s deck.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
				es: "Lanza 2 monedas. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
				pt: "Jogue 2 moedas. Para cada cara, descarte 2 cards de cima do baralho do seu oponente.",
				de: "Wirf 2 Münzen. Lege pro „Kopf“ 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thick Liquid",
				fr: "Liquide Épais",
				es: "Líquido Espeso",
				it: "Liquido Denso",
				pt: "Líquido Denso",
				de: "Zähe Flüssigkeit"
			},
			effect: {
				en: "Both Active Pokémon are now Confused and Poisoned.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus et Empoisonnés.",
				es: "Ambos Pokémon Activos pasan a estar Confundidos y Envenenados.",
				it: "Entrambi i Pokémon attivi vengono confusi e avvelenati.",
				pt: "Ambos os Pokémon Ativos agora estão Confusos e Envenenados.",
				de: "Beide Aktiven Pokémon sind jetzt verwirrt und vergiftet."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
