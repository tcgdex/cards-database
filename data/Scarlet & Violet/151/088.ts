import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		fr: "Tadmorv",
		en: "Grimer",
		es: "Grimer",
		it: "Grimer",
		pt: "Grimer",
		de: "Sleima"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Pression Gluante",
			en: "Gummy Press",
			es: "Presión Pegajosa",
			it: "Pressa Appiccicosa",
			pt: "Compressão Viscosa",
			de: "Klebriger Druck"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Coût de Retraite du Pokémon Défenseur est augmenté de Colorless.",
			en: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless more.",
			es: "Durante el próximo turno de tu rival, el Coste de Retirada del Pokémon Defensor es de Colorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo di ritirata del Pokémon difensore aumenta di Colorless.",
			pt: "Durante o próximo turno do seu oponente, o custo de Recuo do Pokémon Defensor será Colorless a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Rückzugskosten des Verteidigenden Pokémon um Colorless."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card