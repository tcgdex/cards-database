import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Emboar ex",
		fr: "Méga-Roitiflam-ex",
		es: "Mega-Emboar ex",
		de: "Mega-Flambirex-ex",
		it: "Mega Emboar-ex",
		pt: "Mega Emboar ex"
	},
	evolveFrom: {
		en: "Pignite",
		de: "Ferkokel",
		es: "Pignite",
		fr: "Grotichon",
		it: "Pignite",
		pt: "Pignite",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "None",
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
			de: "Feuerrote Explosion",
			it: "Vermiglioscoppio",
			pt: "Explosão Carmim"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 320
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	]
}

export default card
