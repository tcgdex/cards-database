import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		fr: "Chamallot",
		en: "Numel",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Magma Ardent",
			en: "Hot Magma",
			es: "Magma Caliente",
			it: "Magma Bollente",
			pt: "Magma Cálido",
			de: "Heißes Magma"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent's Active Pokémon is now Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mizue",

	thirdParty: {
		cardmarket: 725111
	}
}

export default card