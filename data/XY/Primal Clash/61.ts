import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		it: "Manectric",
		pt: "Manectric",
		de: "Voltenso"
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
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Turn",
				fr: "Tour Éclair",
				es: "Giro Relámpago",
				it: "Girata Fulminante",
				pt: "Giro de Raios",
				de: "Blitzartige Drehung"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
				en: "Electric Shock",
				fr: "Choc Électrique",
				es: "Sacudida Eléctrica",
				it: "Elettroshock",
				pt: "Choque Elétrico",
				de: "Elektroschock"
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Descarta todas las Energías Lightning unidas a este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Descarte toda a Energia Lightning ligada a este Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
				de: "Lege alle an dieses Pokémon angelegten Lightning-Energien auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
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

	thirdParty: {
		cardmarket: 273592
	}
}

export default card
