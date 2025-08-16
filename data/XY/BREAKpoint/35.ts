import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Siphon Off",
				fr: "Aspiration",
				es: "Sacar a Sifón",
				it: "Risucchio",
				pt: "Sifão Desativado",
				de: "Abzapfen"
			},
			effect: {
				en: "Attach 3 Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
				es: "Une 3 cartas de Energía de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon tre carte Energia dalla tua pila degli scarti.",
				pt: "Ligue 3 cards de Energia da sua pilha de descarte a este Pokémon.",
				de: "Lege 3 Energiekarten von deinem Ablagestapel an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Shaky Fall",
				fr: "Chute Précaire",
				es: "Caída Tambaleante",
				it: "Capitombolo",
				pt: "Queda Trêmula",
				de: "Holpriger Fall"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Le Pokémon ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso. Aquele Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Jenes Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 288210,
		tcgplayer: 111542
	}
}

export default card
