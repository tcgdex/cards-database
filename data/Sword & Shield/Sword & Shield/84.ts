import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				es: "Pesadilla",
				it: "Incubo",
				pt: "Pesadelo",
				de: "Nachtmahr"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
				es: "Disparo Embrujado",
				it: "Colpomistero",
				pt: "Tiro Assustador",
				de: "Spukschuss"
			},

			damage: 40,

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
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes."
	}
}

export default card
