import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'de-de': "Rabigator",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'es-es': "Krookodile",
		'es-mx': "Krookodile"
	},

	illustrator: "Gapao",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'de-de': "Rokkaiman",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'es-es': "Krokorok",
		'es-mx': "Krokorok"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Tighten Up",
			'fr-fr': "Resserrage",
			'de-de': "Zudrücken",
			'it-it': "Torchio",
			'pt-br': "Espremer",
			'es-es': "Apretar",
			'es-mx': "Coerción"
		},

		effect: {
			'en-us': "Your opponent discards 2 cards from their hand.",
			'fr-fr': "Votre adversaire défausse 2 cartes de sa main.",
			'de-de': "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel.",
			'it-it': "Il tuo avversario scarta due carte che ha in mano.",
			'pt-br': "Seu oponente descarta 2 cartas da mão dele.",
			'es-es': "Tu rival descarta 2 cartas de su mano.",
			'es-mx': "Tu rival descarta 2 cartas de su mano."
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Cursed Slug",
			'fr-fr': "Frappe Maudite",
			'de-de': "Verfluchter Schlag",
			'it-it': "Pugno Maledetto",
			'pt-br': "Murro Amaldiçoado",
			'es-es': "Puñetazo Maldito",
			'es-mx': "Puñetazo Maldito"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer cards in their hand, this attack does 120 more damage.",
			'fr-fr': "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se il tuo avversario ha tre o meno carte in mano, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas na mão dele, este ataque causará 120 pontos de dano a mais.",
			'es-es': "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836026,
				tcgplayer: 642511
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836026,
				tcgplayer: 642511
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836410,
				tcgplayer: 642753
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836412,
				tcgplayer: 642753
			}
		}
	]
}

export default card
