import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Palossand",
		'fr-fr': "Trépassable",
		'es-es': "Palossand",
		'it-it': "Palossand",
		'pt-br': "Palossand",
		'de-de': "Colossand"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		770,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tourbi-Sable",
				'es-es': "Bucle Arena",
				'it-it': "Sabbiotomba",
				'pt-br': "Fosso de Areia",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dust Storm",
				'fr-fr': "Tempête de Poussière",
				'es-es': "Tormenta de Polvo",
				'it-it': "Tempesta di Polvere",
				'pt-br': "Tempestade de Poeira",
				'de-de': "Staubsturm"
			},
			effect: {
				'en-us': "Discard all cards from both Active Pokémon.",
				'fr-fr': "Défaussez toutes les cartes attachées aux deux Pokémon Actifs.",
				'es-es': "Descarta todas las cartas de ambos Pokémon Activos.",
				'it-it': "Scarta tutte le carte assegnate a ciascun Pokémon attivo.",
				'pt-br': "Descarte todas as cartas de ambos os Pokémon Ativos.",
				'de-de': "Lege alle Karten von beiden Aktiven Pokémon auf den Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Possessed people controlled by this Pokémon transformed its sand mound into a castle. As it evolved, its power to curse grew ever stronger.",
	},

	thirdParty: {
		cardmarket: 299466,
		tcgplayer: 138544
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
