import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		pt: "Exeggutor",
		it: "Exeggutor",
		de: "Kokowei"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			pt: "Megadreno",
			it: "Megassorbimento",
			de: "Megasauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			pt: "Raio Solar",
			it: "Solarraggio",
			de: "Solarstrahl"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Dsuke",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	thirdParty: {
		cardmarket: 805391
	}
}

export default card