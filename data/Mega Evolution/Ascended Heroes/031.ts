import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Emboar ex",
		fr: "Méga-Roitiflam-ex",
		es: "Mega-Emboar ex",
		'es-mx': "Mega-Emboar ex",
		de: "Mega-Flambirex-ex",
		it: "Mega Emboar-ex",
		pt: "Mega Emboar ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 380,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [500],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Crimson Blast",
			fr: "Explosion Écarlate",
			es: "Estallido Carmesí",
			'es-mx': "Explosión Carmesí",
			de: "Feuerrote Explosion",
			it: "Vermiglioscoppio",
			pt: "Explosão Carmim"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 320
	}],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675843,
		cardmarket: 869642
	}
}

export default card