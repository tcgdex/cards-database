import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Cobweb Trip",
				'fr-fr': "Toile Entrave",
				'es-es': "Paseo Telaraña",
				'it-it': "Inciampatela",
				'pt-br': "Armadilha de Teia de Aranha",
				'de-de': "Netzfalle"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with your opponent's Active Pokémon. The new Active Pokémon is now Confused.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. O novo Pokémon Ativo agora está confuso.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electroweb",
				'fr-fr': "Toile Élek",
				'es-es': "Electrotela",
				'it-it': "Elettrotela",
				'pt-br': "Teia Elétrica",
				'de-de': "Elektronetz"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
	},

	thirdParty: {
		cardmarket: 281831,
		tcgplayer: 94160
	}
}

export default card
