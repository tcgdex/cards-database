import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [685],

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		'es-mx': "Slurpuff",
		de: "Sabbaione",
		it: "Slurpuff",
		pt: "Slurpuff"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			de: "Magischer Schuss",
			it: "Magicolpo",
			pt: "Tiro Mágico"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675906,
		cardmarket: 869705
	}
}

export default card