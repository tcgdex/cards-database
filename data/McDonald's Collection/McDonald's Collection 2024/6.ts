import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		es: "Dragapult",
		it: "Dragapult",
		pt: "Dragapult",
		de: "Katapuldra"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [887],

	hp: 150,

	types: ["Psychic"],

	stage: "Stage2",

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},
			damage: 60,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Phantom Force",
				fr: "Hantise",
				es: "Golpe Fantasma",
				it: "Spettrotuffo",
				pt: "Golpe Fantasma",
				de: "Phantomkraft"
			},
			damage: 120,
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Benched Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
				es: "Pon 3 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
				it: "Metti tre segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
				pt: "Coloque 3 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
				de: "Lege 3 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
			},
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
			value: "-30"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

