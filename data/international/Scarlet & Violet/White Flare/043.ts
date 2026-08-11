import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [576],
	set: Set,

	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'de-de': "Morbitesse",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'es-es': "Gothitelle",
		'es-mx': "Gothitelle"
	},

	illustrator: "Mousho",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'de-de': "Hypnomorba",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'es-es': "Gothorita",
		'es-mx': "Gothorita"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Distorted Future",
			'fr-fr': "Futur Déformé",
			'de-de': "Verzerrte Zukunft",
			'it-it': "Futuro Distorto",
			'pt-br': "Futuro Distorcido",
			'es-es': "Futuro Distorsionado",
			'es-mx': "Futuro Distorsionado"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may have your opponent shuffle their hand into their deck and draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez demander à votre adversaire de mélanger sa main avec son deck et de piocher 3 cartes.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du deinen Gegner dazu veranlassen, seine Handkarten in sein Deck zu mischen und 3 Karten zu ziehen.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi far rimischiare al tuo avversario le carte che ha in mano nel suo mazzo e fargli pescare tre carte.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá fazer com que o seu oponente embaralhe a mão dele no baralho dele e compre 3 cartas.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival ponga las cartas de su mano en su baraja, las baraje todas y robe 3 cartas.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival ponga las cartas de su mano en su mazo, las baraje todas y robe 3 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Synchro Shot",
			'fr-fr': "Coup Synchro",
			'de-de': "Synchro-Schuss",
			'it-it': "Sincrocolpo",
			'pt-br': "Disparo Sincronizado",
			'es-es': "Disparo Sincronizado",
			'es-mx': "Sincrodisparo"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 835979,
			tcgplayer: 642155
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 835979,
			tcgplayer: 642155
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 836571,
			tcgplayer: 642398
		}
	},
	{
		type: "reverse",
		foil: "masterball",
		thirdParty: {
			cardmarket: 836572,
			tcgplayer: 642326
		}
	},
],
}

export default card
