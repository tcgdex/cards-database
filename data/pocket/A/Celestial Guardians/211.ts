import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'es-es': "Ivysaur",
		'it-it': "Ivysaur",
		'de-de': "Bisaknosp",
		'pt-br': "Ivysaur",
		'ko-kr': "이상해풀"
	},

	illustrator: "Ryuta Fuse",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [2],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bulbasaur"
	},

	description: {
		'en-us': "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
		'fr-fr': "Son bulbe dorsal est devenu si gros qu'il ne peut\nplus se tenir sur ses pattes postérieures.",
		'es-es': "Cuando le crece bastante el bulbo del lomo, pierde\nla capacidad de erguirse sobre las patas traseras.",
		'it-it': "Il bulbo sulla schiena è cresciuto così tanto da\nimpedirgli di alzarsi in piedi sulle zampe posteriori.",
		'de-de': "Sobald die Knospe auf seinem Rücken\ngroß wird, kann Bisaknosp nicht mehr\nauf zwei Beinen stehen.",
		'pt-br': "À medida que o bulbo nas costas deste Pokémon\ncresce, ele parece perder a capacidade de se sustentar\napenas nas pernas de trás.",
		'ko-kr': "등에 있는 봉오리가 크게\n자라면 두 다리로\n설 수 없게 되는 듯하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'de-de': "Rasierblatt",
			'pt-br': "Folha Navalha",
			'ko-kr': "잎날가르기"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card