import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		en: "Noivern ex",
		fr: "Bruyverne-ex",
		es: "Noivern ex",
		pt: "Noivern ex",
		it: "Noivern-ex",
		de: "UHaFnir-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Strafe",
			fr: "Bombarder",
			es: "Pasada de Ataque",
			pt: "Bombardear",
			it: "Mitragliare",
			de: "Beharken"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sonic Blast",
			fr: "Explosion Sonique",
			es: "Explosión Sónica",
			pt: "Estouro Sônico",
			it: "Scoppio Sonico",
			de: "Überschallstoß"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "PLANETA Igarashi",

	thirdParty: {
		cardmarket: 805483
	}
}

export default card