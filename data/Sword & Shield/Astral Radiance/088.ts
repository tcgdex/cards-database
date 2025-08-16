import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		en: "Hisuian Qwilfish",
		fr: "Qwilfish de Hisui",
		es: "Qwilfish de Hisui",
		it: "Qwilfish di Hisui",
		pt: "Qwilfish de Hisui",
		de: "Hisui-Baldorfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658709,
		tcgplayer: 272289
	}
}

export default card