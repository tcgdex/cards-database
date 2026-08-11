import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Tricky Steps",
				'fr-fr': "Pas Délicats",
				'es-es': "Pasos Astutos",
				'it-it': "Passinganno",
				'pt-br': "Passos Ardilosos",
				'de-de': "Listiges Vorgehen"
			},
			effect: {
				'en-us': "You may move an Energy attached to your opponent's Active Pokémon to 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
				'es-es': "Puedes mover 1 Energía unida al Pokémon Activo de tu rival a 1 de los Pokémon en Banca de tu rival.",
				'it-it': "Puoi spostare un'Energia assegnata al Pokémon attivo del tuo avversario su uno dei Pokémon nella sua panchina.",
				'pt-br': "Você pode mover um card de Energia ligado ao Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco desse oponente.",
				'de-de': "Du kannst 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners verschieben."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does a strange dance to control foes' minds.",
	},

	thirdParty: {
		cardmarket: 281387,
		tcgplayer: 85973
	}
}

export default card
