import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Barrier Shrine",
				'fr-fr': "Sanctuaire",
				'es-es': "Barrera Santuario",
				'it-it': "Barriera Sacra",
				'pt-br': "Santuário da Barreira",
				'de-de': "Absperrstätte"
			},
			effect: {
				'en-us': "Each player can't play any Stadium cards from his or her hand.",
				'fr-fr': "Aucun joueur ne peut jouer de cartes Stade de sa main.",
				'es-es': "Los jugadores no pueden jugar ninguna carta de Estadio de su mano.",
				'it-it': "Nessun giocatore può giocare carte Stadio dalla propria mano.",
				'pt-br': "Nenhum jogador pode jogar cards de Estádio da própria mão.",
				'de-de': "Kein Spieler darf Stadionkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flickering Flames",
				'fr-fr': "Flammes Vacillantes",
				'es-es': "Llamas Titilantes",
				'it-it': "Guizzafiamme",
				'pt-br': "Chamas Tremeluzentes",
				'de-de': "Züngelnde Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
	},

	thirdParty: {
		cardmarket: 273552,
		tcgplayer: 95905
	}
}

export default card
