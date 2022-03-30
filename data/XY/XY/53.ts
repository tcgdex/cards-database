import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Scolipede",
		fr: "Brutapode",
		es: "Scolipede",
		it: "Scolipede",
		pt: "Scolipede",
		de: "Cerapendra"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		545,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
		es: "Whirlipede",
		it: "Whirlipede",
		pt: "Whirlipede",
		de: "Rollum"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d'Bec au Pif",
				es: "Picotazo al Azar",
				it: "Beccata Casuale",
				pt: "Bicada Aleatória",
				de: "Zufälliger Schnabelhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de Poison",
				es: "Anillo Venenoso",
				it: "Velenanello",
				pt: "Anel de Veneno",
				de: "Giftring"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Esse Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Dieses Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 70,

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
