import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spiral Gyration",
				fr: "Rotation Spirale",
				es: "Giro Espiral",
				it: "Spirale Roteante",
				pt: "Giro Espiral",
				de: "Kreiswirbel"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Il Pokémon attivo del tuo avversario viene confuso. Scambia questo Pokémon con uno della tua panchina.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				es: "Tajo Aéreo",
				it: "Eterelama",
				pt: "Golpe de Ar",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273545,
		tcgplayer: 95898
	}
}

export default card
