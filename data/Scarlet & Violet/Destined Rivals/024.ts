import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Rellor",
		fr: "Léboulérou",
		de: "Relluk",
		it: "Rellor",
		es: "Rellor",
		pt: "Rellor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			it: "Tassa",
			es: "Coleccionar",
			pt: "Coleta"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			es: "Rodar",
			pt: "Rolagem"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card