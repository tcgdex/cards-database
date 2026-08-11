import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'es-es': "Pelipper",
		'it-it': "Pelipper",
		'pt-br': "Pelipper",
		'de-de': "Pelipper"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Firefighting",
				'fr-fr': "Anti-Flammes",
				'es-es': "Antiincendios",
				'it-it': "Estinzione",
				'pt-br': "Apagar Incêndios",
				'de-de': "Feuerwehr"
			},
			effect: {
				'en-us': "Discard a Fire Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Fire del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia Fire assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Fire do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Fire-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d’Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

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

	retreat: 2,

	description: {
		'en-us': "Gathering food is the work of young males. They store food in their capacious beaks and carry it back to others waiting in the nest.",
	},

	thirdParty: {
		cardmarket: 361351,
		tcgplayer: 170941
	}
}

export default card
