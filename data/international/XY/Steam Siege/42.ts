import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 90,

	types: [
		"Lightning",
		"Grass",
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
				"Colorless",
			],
			name: {
				'en-us': "Double Thread",
				'fr-fr': "Double Fil",
				'es-es': "Hilo Doble",
				'it-it': "Doppiofilo",
				'pt-br': "Fio Duplo",
				'de-de': "Doppelter Faden"
			},
			effect: {
				'en-us': "This attack does 30 damage to 2 of your opponent's Benched Pokémon. Apply Weakness and Resistance.",
				'fr-fr': "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. Appliquez aussi la Faiblesse et la Résistance.",
				'es-es': "Este ataque hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. Aplica Debilidad y Resistencia.",
				'it-it': "Questo attacco infligge 30 danni a due dei Pokémon in panchina del tuo avversario. Ricorda di applicare debolezza e resistenza.",
				'pt-br': "Este ataque causa 30 de danos a 2 dos Pokémon no Banco do seu oponente. Aplique Fraqueza e Resistência.",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. Wende Schwäche und Resistenz an."
			},

		},
		{
			cost: [
				"Lightning",
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
			damage: 30,

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
		'en-us': "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
	},

	thirdParty: {
		cardmarket: 291535,
		tcgplayer: 121131
	}
}

export default card
