import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck."
	},

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex",
		es: "Scraggy",
		it: "Scraggy",
		'es-mx': "Scraggy",
		pt: "Scraggy"
	},

	illustrator: "GOSSAN",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [559],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Nitpick",
			fr: "Pinaillage",
			de: "Kleinlich",
			es: "Tiquismiquis",
			it: "Pignoleria",
			'es-mx': "Suspicacia",
			pt: "Implicância"
		},

		effect: {
			en: "Your opponent shuffles their hand into their deck and draws 4 cards.",
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 4 Karten.",
			es: "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			it: "Il tuo avversario rimischia le carte che ha in mano nel suo mazzo e pesca quattro carte.",
			'es-mx': "Tu rival baraja su mano en su mazo y roba 4 cartas.",
			pt: "Seu oponente embaralha a mão dele no baralho dele e compra 4 cartas."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			'es-mx': "Puño Sacacorchos",
			pt: "Soco Saca-rolha"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907748,
				tcgplayer: 716225
			}
		}
	],
}

export default card
