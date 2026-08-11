import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Déraillement",
				'es-es': "Descarrilar",
				'it-it': "Deragliamento",
				'pt-br': "Descarrilhar",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
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
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
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

	retreat: 0,

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
	},

	thirdParty: {
		cardmarket: 369025,
		tcgplayer: 183873
	}
}

export default card
