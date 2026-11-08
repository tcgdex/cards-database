import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'es-es': "Houndoom",
		'it-it': "Houndoom",
		'pt-br': "Houndoom",
		'de-de': "Hundemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fire Blast",
			'fr-fr': "Déflagration",
			'es-es': "Llamarada",
			'it-it': "Fuocobomba",
			'pt-br': "Rajada de Fogo",
			'de-de': "Feuersturm"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "hncl",

	description: {
		'en-us': "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
	},

	thirdParty: {
        cardmarket: 702330,
        tcgplayer: 487874
    }
}

export default card