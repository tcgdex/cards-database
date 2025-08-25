import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		fr: "Chenipan",
		en: "Caterpie",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Mange-Feuille",
			en: "Leaf Munch",
			es: "Mascahojas",
			it: "Mangifoglia",
			pt: "Mastigar Folhas",
			de: "Laubmampfer"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 30 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 30 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {G}, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon {G}, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon {G}, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {G}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno",

	thirdParty: {
		cardmarket: 733605
	}
}

export default card