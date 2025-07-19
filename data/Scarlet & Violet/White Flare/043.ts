import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		de: "Morbitesse",
		it: "Gothitelle",
		pt: "Gothitelle",
		es: "Gothitelle",
		'es-mx': "Gothitelle"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Distorted Future",
			fr: "Futur Déformé",
			de: "Verzerrte Zukunft",
			it: "Futuro Distorto",
			pt: "Futuro Distorcido",
			es: "Futuro Distorsionado",
			'es-mx': "Futuro Distorsionado"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may have your opponent shuffle their hand into their deck and draw 3 cards.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez demander à votre adversaire de mélanger sa main avec son deck et de piocher 3 cartes.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen und 3 Karten zu ziehen.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo e fargli pescare tre carte.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá fazer com que o seu oponente embaralhe a mão dele no baralho dele e compre 3 cartas.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival ponga las cartas de su mano en su baraja, las baraje todas y robe 3 cartas.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival ponga las cartas de su mano en su mazo, las baraje todas y robe 3 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Synchro Shot",
			fr: "Coup Synchro",
			de: "Synchro-Schuss",
			it: "Sincrocolpo",
			pt: "Disparo Sincronizado",
			es: "Disparo Sincronizado",
			'es-mx': "Sincrodisparo"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card