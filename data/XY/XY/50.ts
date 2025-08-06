import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		pt: "Grumpig",
		de: "Groink"
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
		en: "Spoink",
		fr: "Spoink",
		es: "Spoink",
		it: "Spoink",
		pt: "Spoink",
		de: "Spoink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tricky Steps",
				fr: "Pas Délicats",
				es: "Pasos Astutos",
				it: "Passinganno",
				pt: "Passos Ardilosos",
				de: "Listiges Vorgehen"
			},
			effect: {
				en: "You may move an Energy attached to your opponent's Active Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie attachée au Pokémon Actif de votre adversaire vers l'un des Pokémon de Banc de votre adversaire.",
				es: "Puedes mover 1 Energía unida al Pokémon Activo de tu rival a 1 de los Pokémon en Banca de tu rival.",
				it: "Puoi spostare un'Energia assegnata al Pokémon attivo del tuo avversario su uno dei Pokémon nella sua panchina.",
				pt: "Você pode mover um card de Energia ligado ao Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco desse oponente.",
				de: "Du kannst 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners verschieben."
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
				en: "Psybeam",
				fr: "Rafale Psy",
				es: "Psicorrayo",
				it: "Psicoraggio",
				pt: "Feixe Psíquico",
				de: "Psystrahl"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	thirdParty: {
		cardmarket: 281387,
		tcgplayer: 85973
	}
}

export default card
