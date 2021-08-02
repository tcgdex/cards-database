import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Miraculous Charm",
				fr: "Amulette Miraculeuse",
				es: "Amuleto Milagroso",
				it: "Amuleto Miracoloso",
				pt: "Pingente Milagroso",
				de: "Wunderamulett"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V y Pokémon-GX de tu rival.",
				it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V e dei Pokémon-GX del tuo avversario.",
				pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V e Pokémon-GX do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V und Pokémon-GX deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Plongée Rapide",
				es: "Picado Rápido",
				it: "Immersione Rapida",
				pt: "Mergulho Veloz",
				de: "Tempohechtsprung"
			},

			damage: 60,

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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
