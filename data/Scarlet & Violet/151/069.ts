import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [69],
	set: Set,

	name: {
		fr: "Chétiflor",
		en: "Bellsprout",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Coupe",
			en: "Cut",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Astreinte",
			en: "Bind Down",
			es: "Amarrar",
			it: "Legafermo",
			pt: "Aprisionamento",
			de: "Anbinden"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Jerky",

	thirdParty: {
		cardmarket: 733664
	}
}

export default card