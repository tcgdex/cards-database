import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement Vicieux",
				es: "Colocación Furtiva",
				it: "Furtivappoggio",
				pt: "Posição Sorrateira",
				de: "Heimlichtuerei"
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
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,
	hp: 80,
	types: ["Psychic"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If you build sand mounds when you’re playing, destroy them before you go home, or they may get possessed and become Sandygast."
	}
}

export default card
