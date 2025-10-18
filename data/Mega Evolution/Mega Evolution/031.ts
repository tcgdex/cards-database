import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Chi-Yu",
		fr: "Yuyu",
		de: "Yuyu",
		it: "Chi-Yu",
		es: "Chi-Yu",
		pt: "Chi-Yu",
		'es-mx': "Chi-Yu"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",
	dexId: [1004],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Scorching Earth",
			fr: "Terre Incandescente",
			de: "Versengte Erde",
			it: "Terra Ustionante",
			es: "Tierra Abrasadora",
			pt: "Solo Incinerado",
			'es-mx': "Tierra Calcinante"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it. If you do, your opponent can't play any Stadium cards from their hand during their next turn.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le. Dans ce cas, votre adversaire ne peut pas jouer de cartes Stade de sa main pendant son prochain tour.",
			de: "Wenn dein Gegner ein Stadion im Spiel hat, lege es auf seinen Ablagestapel. Wenn du das machst, kann dein Gegner während seines nächsten Zuges keine Stadionkarten aus seiner Hand spielen.",
			it: "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se lo fai, il tuo avversario non può giocare le carte Stadio che ha in mano durante il suo prossimo turno.",
			es: "Si tu rival tiene un Estadio en juego, descártalo. Si lo haces, tu rival no puede jugar ninguna carta de Estadio de su mano durante su próximo turno.",
			pt: "Se o seu oponente tiver um Estádio em jogo, descarte-o. Se fizer isso, seu oponente não poderá jogar nenhuma carta de Estádio da mão dele durante o próximo turno dele.",
			'es-mx': "Si tu rival tiene un Estadio en juego, descártalo. Si lo haces, tu rival no puede jugar ninguna carta de Estadio de su mano durante su próximo turno."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654370
	}
}

export default card