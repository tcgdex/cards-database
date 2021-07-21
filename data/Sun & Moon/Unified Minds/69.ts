import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		pt: "Tapu Koko",
		de: "Kapu-Riki"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
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
				en: "Nature Dive",
				fr: "Piqué Naturel",
				es: "Picado de la Naturaleza",
				it: "Immersione nella Natura",
				pt: "Mergulho na Natureza",
				de: "Manöver der Natur"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Ultra Beast, this attack does 100 more damage, and discard 2 Energy from this Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 100 dégâts supplémentaires et vous défaussez 2 Énergies de ce Pokémon.",
				es: "Si el Pokémon Activo de tu rival es un Ultraente, este ataque hace 100 puntos de daño más, y descartas 2 Energías de este Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è un’Ultracreatura, questo attacco infligge 100 danni in più. Scarta due Energie assegnate a questo Pokémon.",
				pt: "Se o Pokémon Ativo do seu oponente for uma Ultracriatura, este ataque causará 100 pontos de dano a mais, e descarte 2 Energias deste Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners eine Ultrabestie ist, fügt diese Attacke 100 Schadenspunkte mehr zu und du legst 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: "100+",

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



}

export default card
