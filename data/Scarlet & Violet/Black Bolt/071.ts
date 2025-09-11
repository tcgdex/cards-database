import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [519],
	set: Set,

	name: {
		en: "Pidove",
		fr: "Poichigeon",
		de: "Dusselgurr",
		it: "Pidove",
		pt: "Pidove",
		es: "Pidove",
		'es-mx': "Pidove"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scout",
			fr: "Espionnage",
			de: "Späher",
			it: "Esplorazione",
			pt: "Explorador",
			es: "Explorar",
			'es-mx': "Expedición"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			de: "Dein Gegner zeigt dir seine Handkarten.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a mão dele.",
			es: "Tu rival enseña las cartas de su mano.",
			'es-mx': "Tu rival muestra las cartas de su mano."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			es: "Estampida",
			'es-mx': "Estampida"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836052
	},

	variants: [{
		type: "normal",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}, {
		type: "reverse",
		size: "standard",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "pokeball",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "masterball",
		description: "Found in Booster Packs",
		set: "parallel"
	}]
}

export default card