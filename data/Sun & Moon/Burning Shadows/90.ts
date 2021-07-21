import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
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
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Slosh",
				fr: "Renversement d’Énergie",
				es: "Chapoteo de Energía",
				it: "Schizzo Energetico",
				pt: "Salpicar Energia",
				de: "Energieflut"
			},
			effect: {
				en: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer toute l’Énergie de ce Pokémon vers l’un de vos Pokémon de Banc",
				es: "Puedes mover todas las Energías de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Puoi spostare tutta l’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Você pode mover todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Du kannst alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank verschieben."
			},
			damage: 70,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
