import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
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
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Siphon Off",
				'fr-fr': "Aspiration",
				'es-es': "Sacar a Sifón",
				'it-it': "Risucchio",
				'pt-br': "Sifão Desativado",
				'de-de': "Abzapfen"
			},
			effect: {
				'en-us': "Attach 3 Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 3 cartas de Energía de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon tre carte Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue 3 cards de Energia da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 3 Energiekarten von deinem Ablagestapel an dieses Pokémon an."
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
				'en-us': "Shaky Fall",
				'fr-fr': "Chute Précaire",
				'es-es': "Caída Tambaleante",
				'it-it': "Capitombolo",
				'pt-br': "Queda Trêmula",
				'de-de': "Holpriger Fall"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Le Pokémon ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Aquele Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Jenes Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	description: {
		'en-us': "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
	},

	thirdParty: {
		cardmarket: 288210,
		tcgplayer: 111542
	}
}

export default card
