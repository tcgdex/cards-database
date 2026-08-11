import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venusaur ex",
		'fr-fr': "Florizarre-ex",
		'es-es': "Venusaur ex",
		'it-it': "Venusaur-ex",
		'de-de': "Bisaflor-ex",
		'pt-br': "Venusaur ex",
		'ko-kr': "이상해꽃 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [3],
	hp: 190,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Ivysaur"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'de-de': "Rasierblatt",
			'pt-br': "Folha Navalha",
			'ko-kr': "잎날가르기"
		},

		damage: "60"
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Giant Bloom",
			'fr-fr': "Pousse Géante",
			'es-es': "Floración Gigante",
			'it-it': "Gigafioritura",
			'de-de': "Riesenblüte",
			'pt-br': "Florescimento Gigante",
			'ko-kr': "자이언트 블룸"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 30회복."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Star",
	boosters: ["mewtwo"]
}

export default card
