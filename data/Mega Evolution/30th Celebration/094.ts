import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex",
		es: "Scraggy",
		it: "Scraggy",
		'es-mx': "Scraggy"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
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
			'es-mx': "Suspicacia"
		},

		effect: {
			en: "Your opponent shuffles their hand into their deck and draws 4 cards.",
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 4 Karten.",
			es: "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			it: "Il tuo avversario rimischia le carte che ha in mano nel suo mazzo e pesca quattro carte.",
			'es-mx': "Tu rival baraja su mano en su mazo y roba 4 cartas."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card