import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas",
			'de-de': "Flammenwurf"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794295,
				tcgplayer: 589897
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794295,
				tcgplayer: 589897
			}
		},
	],

	illustrator: "Mékayu",
	
}

export default card
