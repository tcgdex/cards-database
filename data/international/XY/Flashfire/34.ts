import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
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
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Fang Snipe",
				'fr-fr': "Croc Ciblé",
				'es-es': "Disparo Colmillo",
				'it-it': "Zannamirata",
				'pt-br': "Emboscada com Presas",
				'de-de': "Rasanter Reißzahn"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
				'fr-fr': "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra quelle carte.",
				'pt-br': "Seu oponente revela sua própria mão. Descarte um card de Treinador que encontrar.",
				'de-de': "Dein Gegner deckt seine Handkarten auf. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
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
				'en-us': "Wild Charge",
				'fr-fr': "Éclair Fou",
				'es-es': "Voltio Cruel",
				'it-it': "Sprizzalampo",
				'pt-br': "Ataque Selvagem",
				'de-de': "Stromstoß"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
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

	description: {
		'en-us': "When its eyes gleam gold, it can spot hiding prey–even those taking shelter behind a wall.",
	},

	thirdParty: {
		cardmarket: 281517,
		tcgplayer: 91167
	}
}

export default card
