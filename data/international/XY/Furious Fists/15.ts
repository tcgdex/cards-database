import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Current",
				'fr-fr': "Courant Tourbillonnant",
				'es-es': "Corriente Espiral",
				'it-it': "Corrente a Spirale",
				'pt-br': "Corrente Espiral",
				'de-de': "Spiralsog"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Esse Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Es kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern.",
	},

	thirdParty: {
		cardmarket: 281679,
		tcgplayer: 92187
	}
}

export default card
