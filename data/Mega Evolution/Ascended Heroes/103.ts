import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		'es-mx': "Meditite",
		de: "Meditie",
		it: "Meditite",
		pt: "Meditite"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			'es-mx': "Recolectar",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		}
	}, {
		cost: ["Fighting"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869714,
			tcgplayer: 675915
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869714,
			tcgplayer: 675915
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870301,
			tcgplayer: 676935
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870302,
			tcgplayer: 677075
		}
	},
],
}

export default card
