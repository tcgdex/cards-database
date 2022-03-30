import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		405,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Fang Snipe",
				fr: "Croc Ciblé",
				es: "Disparo Colmillo",
				it: "Zannamirata",
				pt: "Emboscada com Presas",
				de: "Rasanter Reißzahn"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra quelle carte.",
				pt: "Seu oponente revela sua própria mão. Descarte um card de Treinador que encontrar.",
				de: "Dein Gegner deckt seine Handkarten auf. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Wild Charge",
				fr: "Éclair Fou",
				es: "Voltio Cruel",
				it: "Sprizzalampo",
				pt: "Ataque Selvagem",
				de: "Stromstoß"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

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
