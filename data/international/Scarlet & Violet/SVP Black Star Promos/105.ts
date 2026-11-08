import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		'en-us': "Armarouge ex",
		'fr-fr': "Carmadura-ex",
		'es-es': "Armarouge ex",
		'it-it': "Armarouge-ex",
		'pt-br': "Armarouge ex",
		'de-de': "Crimanzo-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Armor Cannon",
			'fr-fr': "Canon Armure",
			'es-es': "Cañón Armadura",
			'it-it': "Corazza Cannone",
			'pt-br': "Canhão de Armadura",
			'de-de': "Rüstungskanone"
		},

		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Scarta un'Energia {R} da questo Pokémon.",
			'pt-br': "Descarte uma Energia {R} deste Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	variants: [
		{
			type: "holo"
		}
	],
}

export default card
