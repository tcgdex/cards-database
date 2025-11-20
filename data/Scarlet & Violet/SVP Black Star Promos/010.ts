import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		en: "Espathra",
		fr: "Cléopsytra",
		es: "Espathra",
		it: "Espathra",
		pt: "Espathra",
		de: "Psiopatra"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Aurora Gain",
			fr: "Puissance Boréale",
			es: "Ganar Aurora",
			it: "Prendiaurora",
			pt: "Aurora",
			de: "Aurora-Verstärkung"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 60
	}],

	retreat: 0,
	regulationMark: "G",
	illustrator: "Sanosuke Sakuma"
}

export default card