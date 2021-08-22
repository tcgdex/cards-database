import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Scizor V",
		fr: "Cizayox V",
		es: "Scizor V",
		it: "Scizor V",
		pt: "Scizor V",
		de: "Scherox V"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Hack Off",
				fr: "Sectionnement",
				es: "Cercenar",
				it: "Mozzar Via",
				pt: "Picotar",
				de: "Abhacken"
			},
			effect: {
				en: "Discard a Pokémon Tool and a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez un Outil Pokémon et une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Herramienta Pokémon y 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un Oggetto Pokémon e un’Energia speciale dal Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Ferramenta Pokémon e 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Pokémon-Ausrüstung und 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante",
				es: "Garra Cuchillazo",
				it: "Artigli Laceranti",
				pt: "Garra Cortadora",
				de: "Schlitzende Klaue"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
