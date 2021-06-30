import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		574,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Blown Kiss",
				fr: "Baiser Volé",
				es: "Beso al Viento",
				it: "Bacio Smack",
				pt: "Beijo Soprado",
				de: "Küsschen"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent’s Pokémon.",
				fr: "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
				it: "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
				pt: "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente.",
				de: "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
