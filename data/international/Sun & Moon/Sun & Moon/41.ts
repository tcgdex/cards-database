import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Primarina",
		'fr-fr': "Oratoria",
		'es-es': "Primarina",
		'it-it': "Primarina",
		'pt-br': "Primarina",
		'de-de': "Primarene"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		730,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Disarming Voice",
				'fr-fr': "Voix Enjôleuse",
				'es-es': "Voz Cautivadora",
				'it-it': "Incantavoce",
				'pt-br': "Voz Desarmante",
				'de-de': "Säuselstimme"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sparkling Aria",
				'fr-fr': "Aria de l’Écume",
				'es-es': "Aria Burbuja",
				'it-it': "Canto Effimero",
				'pt-br': "Aria Cintilante",
				'de-de': "Schaumserenade"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It controls its water balloons with song. The melody is learning from others of its kind and is passed down from one generation to the next.",
	},

	thirdParty: {
		cardmarket: 295351,
		tcgplayer: 126912
	}
}

export default card
