import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		en: "Darkrai ex",
		fr: "Darkrai-ex",
		es: "Darkrai ex",
		it: "Darkrai-ex",
		pt: "Darkrai ex",
		de: "Darkrai-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Wind of Darkness",
			fr: "Vent Obscur",
			es: "Viento de Oscuridad",
			it: "Vento dell'Oscurità",
			pt: "Vento da Escuridão",
			de: "Wind der Finsternis"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Night Impact",
			fr: "Impact Nocturne",
			es: "Impacto Nocturno",
			it: "Impatto Notturno",
			pt: "Impacto Noturno",
			de: "Nachteinschlag"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "5ban Graphics"
}

export default card