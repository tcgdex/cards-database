import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'de-de': "Wuffels",
		'pt-br': "Rockruff",
		'ko-kr': "암멍이"
	},

	illustrator: "Oswaldo KATO",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [744],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
		'fr-fr': "Ce Pokémon est très amical lorsqu'il est jeune.\nIl devient plus féroce avec le temps, mais\nsa loyauté envers son Dresseur reste infaillible.",
		'es-es': "Cuando es pequeño es muy cariñoso. A medida\nque crece se vuelve más agresivo, pero la lealtad\nhacia su Entrenador perdura para siempre.",
		'it-it': "I cuccioli di Rockruff si affezionano subito. Crescendo diventano più\nferoci, ma provano per sempre gratitudine verso chi li ha allenati.",
		'de-de': "Wuffels ist sehr zutraulich, solange es jung ist.\nMit dem Alter wird es zunehmend wilder, doch es\nbleibt seinem Trainer auf ewig verbunden.",
		'pt-br': "Este Pokémon é amigável quando jovem. Adquire um\ntemperamento cruel ao crescer, mas nunca se esquece\nda bondade de seu mestre.",
		'ko-kr': "어렸을 때는 매우 잘 따른다.\n자라면서 성질이 사나워지지만\n주인에게 입은 은혜는 잊지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card