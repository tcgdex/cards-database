import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
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
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
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
				en: "Spiral Current",
				fr: "Courant Tourbillonnant",
				es: "Corriente Espiral",
				it: "Corrente a Spirale",
				pt: "Corrente Espiral",
				de: "Spiralsog"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso. Esse Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Es kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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



}

export default card
