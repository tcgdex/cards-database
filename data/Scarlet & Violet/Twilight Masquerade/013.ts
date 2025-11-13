import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
			es: "Gigadrenado",
			it: "Gigassorbimento",
			pt: "Gigadreno",
			de: "Gigasauger"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Forest Dump",
			fr: "Rejet Forestier",
			es: "Descarga Forestal",
			it: "Impatto Forestale",
			pt: "Floresta Entulhada",
			de: "Waldhieb"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 769187
	}
}

export default card