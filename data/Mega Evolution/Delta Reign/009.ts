import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Virizion",
		fr: "Viridium",
		de: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		'es-mx': "Virizion"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			de: "Zweifachzug",
			es: "Roba Doble",
			it: "Pescata Doppia",
			pt: "Compra Dupla",
			'es-mx': "Doble Robo"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			'es-mx': "Rayo Solar"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726511,
		cardmarket: 918818
	}
}

export default card