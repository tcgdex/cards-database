import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
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
				'en-us': "Night Raid",
				'fr-fr': "Raid Nocturne",
				'es-es': "Incursión Nocturna",
				'it-it': "Incursione Notturna",
				'pt-br': "Incursão Noturna",
				'de-de': "Nachtplünderung"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Discard a Pokémon from it.",
				'fr-fr': "Votre adversaire dévoile sa main. Défaussez-en un Pokémon.",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 Pokémon de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta un Pokémon tra esse.",
				'pt-br': "Seu oponente revela a própria mão. Descarte 1 Pokémon que estiver lá.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege 1 Pokémon aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

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

	description: {
		'en-us': "Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark.",
	},

	thirdParty: {
		cardmarket: 299508,
		tcgplayer: 138603
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
