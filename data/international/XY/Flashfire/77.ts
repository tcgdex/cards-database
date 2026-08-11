import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Pidgeot",
		'fr-fr': "Roucarnage",
		'es-es': "Pidgeot",
		'it-it': "Pidgeot",
		'pt-br': "Pidgeot",
		'de-de': "Tauboss"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Clutch",
				'fr-fr': "Serre",
				'es-es': "Embrague",
				'it-it': "Grinfie",
				'pt-br': "Agarramento",
				'de-de': "Greifer"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Gust",
				'fr-fr': "Tornade Puissante",
				'es-es': "Fuerte Ráfaga",
				'it-it': "Forteraffica",
				'pt-br': "Lufada Forte",
				'de-de': "Starke Böe"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Strong Gust attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Souffle Puissant de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Fuerte Ráfaga de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Forteraffica di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, o ataque Lufada Forte deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Starke Böe dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

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

	description: {
		'en-us': "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
	},

	thirdParty: {
		cardmarket: 281560,
		tcgplayer: 91214
	}
}

export default card
