import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		es: "Cloyster",
		it: "Cloyster",
		pt: "Cloyster",
		de: "Austos"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sudden Grip",
				fr: "Pince Surprise",
				es: "Presa Súbita",
				it: "Presa Improvvisa",
				pt: "Agarramento Súbito",
				de: "Zuschnappen"
			},
			effect: {
				en: "If this Pokémon evolved from Shellder during this turn, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Si ce Pokémon a évolué de Kokiyas pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si este Pokémon ha evolucionado de Shellder durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se questo Pokémon si è evoluto da Shellder durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se este Pokémon evoluiu do Shellder durante esta vez de jogar, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Muschas entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfe",
				de: "Surfer"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
