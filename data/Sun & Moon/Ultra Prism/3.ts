import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega",
		de: "Yanmega"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		469,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				es: "Supersónico",
				it: "Supersuono",
				pt: "Supersônico",
				de: "Superschall"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
				es: "Viento Helado",
				it: "Vento Tagliente",
				pt: "Vento Dilacerante",
				de: "Schneidender Wind"
			},

			damage: 120,

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



}

export default card
