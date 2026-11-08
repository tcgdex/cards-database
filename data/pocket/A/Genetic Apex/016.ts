import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'de-de': "Bluzuk",
		'pt-br': "Venonat",
		'ko-kr': "콘팡"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",

	dexId: [48],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
		'fr-fr': "Son corps sécrète un poison redoutable. La nuit, il capture\nde petits Pokémon Insecte attirés par la lumière.",
		'es-es': "Rezuma veneno por todo su cuerpo.\nDe noche, atrapa y come pequeños\nPokémon insecto atraídos por la luz.",
		'it-it': "Da tutto il suo corpo trasuda veleno.\nDi notte cattura piccoli Pokémon\nColeottero attratti dalla luce.",
		'de-de': "Aus seinem ganzen Körper tritt Gift aus.\nEs fängt und frisst nachts kleine Käfer-Pokémon,\ndie von Licht angelockt wurden.",
		'pt-br': "Veneno escorre de todo o seu corpo. Durante a\nnoite, captura pequenos Pokémon inseto que são\natraídos pela luz.",
		'ko-kr': "전신에서 독이 스며 나온다.\n어두워지면 밝은 곳에 모인\n작은 벌레포켓몬을 잡아먹는다."
	},

	boosters: ["mewtwo"]
}

export default card
