import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'it-it': "Manectric",
		'pt-br': "Manectric",
		'de-de': "Voltenso"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Turn",
				'fr-fr': "Tour Éclair",
				'es-es': "Giro Relámpago",
				'it-it': "Girata Fulminante",
				'pt-br': "Giro de Raios",
				'de-de': "Blitzartige Drehung"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Shock",
				'fr-fr': "Choc Électrique",
				'es-es': "Sacudida Eléctrica",
				'it-it': "Elettroshock",
				'pt-br': "Choque Elétrico",
				'de-de': "Elektroschock"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Descarta todas las Energías Lightning unidas a este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Descarte toda a Energia Lightning ligada a este Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
				'de-de': "Lege alle an dieses Pokémon angelegten Lightning-Energien auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.",
	},

	thirdParty: {
		cardmarket: 273592,
		tcgplayer: 95959
	}
}

export default card
