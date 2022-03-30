import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Dialga EX",
		fr: "Dialga EX",
		es: "Dialga EX",
		it: "Dialga EX",
		pt: "Dialga EX",
		de: "Dialga EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chrono Wind",
				fr: "Vent Temporel",
				es: "Retroceso Cronológico",
				it: "Cronolancetta",
				pt: "Vento Temporal",
				de: "Zeitsturm"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon-EX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon-EX, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-EX.",
				pt: "Se o Pokémon Defensor for um Pokémon-EX, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon-EX ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Metal Impact",
				fr: "Full Metal Impact",
				es: "Impacto Metálico Total",
				it: "Metallimpatto",
				pt: "Impacto Metálico Máximo",
				de: "Metalleinschlag"
			},
			effect: {
				en: "Discard 2 Metal Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies Metal attachées à ce Pokémon.",
				es: "Descarta 2 Energías Metal unidas a este Pokémon.",
				it: "Scarta due Energie Metal assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Metal ligadas a este Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte Metal-Energien auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
