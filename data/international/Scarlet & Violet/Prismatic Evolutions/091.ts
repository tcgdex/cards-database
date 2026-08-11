import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		'en-us': "Noivern ex",
		'fr-fr': "Bruyverne-ex",
		'es-es': "Noivern ex",
		'pt-br': "Noivern ex",
		'it-it': "Noivern-ex",
		'de-de': "UHaFnir-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'pt-br': "Noibat",
		'it-it': "Noibat",
		'de-de': "eF-eM"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'es-es': "Pasada de Ataque",
			'pt-br': "Bombardear",
			'it-it': "Mitragliare",
			'de-de': "Beharken"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Sonic Blast",
			'fr-fr': "Explosion Sonique",
			'es-es': "Explosión Sónica",
			'pt-br': "Estouro Sônico",
			'it-it': "Scoppio Sonico",
			'de-de': "Überschallstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",


	suffix: "ex",
	illustrator: "PLANETA Igarashi",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805483,
				tcgplayer: 610446
			}
		},
	],
}

export default card
