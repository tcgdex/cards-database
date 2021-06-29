import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Polteageist",
		fr: "Polthégeist",
		es: "Polteageist",
		it: "Polteageist",
		pt: "Polteageist",
		de: "Mortipot"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Sinistea",
		fr: "Théffroi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Teatime",
				fr: "Thérémonie",
				es: "Hora del Té",
				it: "Ora del Tè",
				pt: "Hora do Chá",
				de: "Teatime"
			},
			effect: {
				en: "Each player draws 2 cards.",
				fr: "Chaque joueur pioche 2 cartes.",
				es: "Cada jugador roba 2 cartas.",
				it: "Ciascun giocatore pesca due carte.",
				pt: "Cada jogador compra 2 cartas.",
				de: "Jeder Spieler zieht 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				es: "Poltergeist",
				it: "Poltergeist",
				pt: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
				pt: "Seu oponente revela a própria mão. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu."
			},
			damage: "50×",

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

	retreat: 1,
	regulationMark: "D"
}

export default card
