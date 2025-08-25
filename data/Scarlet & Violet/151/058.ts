import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		fr: "Caninos",
		en: "Growlithe",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Évaporation",
			en: "Vaporize",
			es: "Vaporizar",
			it: "Vaporizzare",
			pt: "Evaporar",
			de: "Vaporisieren"
		},

		effect: {
			fr: "Défaussez une Énergie {W} du Pokémon Actif de votre adversaire.",
			en: "Discard a {W} Energy from your opponent's Active Pokémon.",
			es: "Descarta 1 Energía {W} del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia {W} dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia {W} do Pokémon Ativo do seu oponente.",
			de: "Lege 1 {W}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Atsushi Furusawa",

	thirdParty: {
		cardmarket: 733653
	}
}

export default card