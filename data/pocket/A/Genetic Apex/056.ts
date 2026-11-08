import { Card } from "models/database/card"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Blastoise ex",
		'fr-fr': "Tortank-ex",
		'es-es': "Blastoise ex",
		'it-it': "Blastoise-ex",
		'de-de': "Turtok-ex",
		'ko-kr': "거북왕 ex",
		'pt-br': "Blastoise ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",

	dexId: [9],
	hp: 180,
	types: ["Water"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Wartortle"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'de-de': "Surfer",
			'ko-kr': "파도타기",
			'pt-br': "Surfar"
		},
		damage: "40"
	}, {
		cost: ["Water", "Water", "Colorless"],
		name: {
			'en-us': "Hydro Bazooka",
			'fr-fr': "Aquazooka",
			'es-es': "Hidrobazuca",
			'it-it': "Idrobazooka",
			'de-de': "Hydro-Bazooka",
			'ko-kr': "하이드로 바주카",
			'pt-br': "Bazuca d'Água"
		},
		effect: {
			'en-us': "If this Pokémon has at least 2 extra {W} Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 2 Énergies {W} de plus, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías {W} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon ha almeno 2 Energie {W} extra assegnate, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra {W}-Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'ko-kr': "{W}에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energia {W} extra ligada a ele, este ataque causará 60 pontos de dano a mais."
		},
		damage: "100+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond",
	boosters: ["pikachu"]
}
export default card