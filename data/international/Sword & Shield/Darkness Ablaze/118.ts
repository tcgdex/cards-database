import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Scizor V",
		'fr-fr': "Cizayox V",
		'es-es': "Scizor V",
		'it-it': "Scizor V",
		'pt-br': "Scizor V",
		'de-de': "Scherox V"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [212],
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
				'en-us': "Hack Off",
				'fr-fr': "Sectionnement",
				'es-es': "Cercenar",
				'it-it': "Mozzar Via",
				'pt-br': "Picotar",
				'de-de': "Abhacken"
			},
			effect: {
				'en-us': "Discard a Pokémon Tool and a Special Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez un Outil Pokémon et une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Herramienta Pokémon y 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un Oggetto Pokémon e un'Energia speciale dal Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Ferramenta Pokémon e 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Pokémon-Ausrüstung und 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				'en-us': "Slashing Claw",
				'fr-fr': "Griffe Taillante",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483469,
				tcgplayer: 219373
			}
		},
	],
}

export default card
