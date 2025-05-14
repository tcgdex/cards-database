import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise ex",
		fr: "Tortank-ex",
		es: "Blastoise ex",
		it: "Blastoise-ex",
		de: "Turtok-ex",
		'pt-br': "Blastoise ex",
		ko: "거북왕 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			de: "Surfer",
			'pt-br': "Surfar",
			ko: "파도타기"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Hydro Bazooka",
			fr: "Aquazooka",
			es: "Hidrobazuca",
			it: "Idrobazooka",
			de: "Hydro-Bazooka",
			'pt-br': "Bazuca d'Água",
			ko: "하이드로 바주카"
		},

		damage: "100+",
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If this Pokémon has at least 2 extra {W} Energy attached, this attack does 60 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {W} de plus, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 2 Energías {W} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 2 Energie {W} extra assegnate, questo attacco infligge 60 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 2 extra {W} Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias {W} extras ligada a ele, este ataque causará 60 pontos de dano a mais.",
			ko: "{W}에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energia {W} extra ligada a ele, este ataque causará 60 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
