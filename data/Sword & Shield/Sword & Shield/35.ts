import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		es: "Cinderace",
		it: "Cinderace",
		pt: "Cinderace",
		de: "Liberlo"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Pyro Ball",
				fr: "Ballon Brûlant",
				es: "Balón Ígneo",
				it: "Palla Infuocata",
				pt: "Bola Incendiária",
				de: "Feuerball"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Burning Kick",
				fr: "Coup de Pied Brûlant",
				es: "Patada Ardiente",
				it: "Calcio Fiammeggiante",
				pt: "Petardo",
				de: "Brennender Schuss"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
				es: "Descarta todas las Energías de este Pokémon.",
				it: "Scarta tutte le Energie da questo Pokémon.",
				pt: "Descarte todas as Energias deste Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
