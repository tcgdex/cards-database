import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		es: "Dustox",
		it: "Dustox",
		pt: "Dustox",
		de: "Pudox"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		it: "Cascoon",
		pt: "Cascoon",
		de: "Panekon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
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
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twilight Poison",
				fr: "Poison Nocturne",
				es: "Veneno Ocaso",
				it: "Veleno Crepuscolare",
				pt: "Veneno do Crepúsculo",
				de: "Dämmergift"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 282675,
		tcgplayer: 98043
	}
}

export default card
