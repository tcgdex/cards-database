import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			pt: "Carga Indomável",
			de: "Waghalsiger Sturmangriff"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "AKIRA EGAWA",

	thirdParty: {
        cardmarket: 702459,
        tcgplayer: 488059
    }
}

export default card