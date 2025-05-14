import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Clodsire ex",
		fr: "Terraistede Paldea-ex",
		es: "Clodsirede Paldea ex",
		it: "Clodsiredi Paldea-ex",
		de: "Paldea-Suelord-ex",
		'pt-br': "Clodsirede Paldea ex",
		ko: "팔데아토오 ex"
	},

	illustrator: "REND",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Paldean Wooper"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			de: "Giftschock",
			'pt-br': "Venochoque",
			ko: "베놈쇼크"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Poisoned, cette attaque inflige 60 dégâts de plus.",
			es: "Si el Pokémon Activo de tu rival está Poisoned, este ataque hace 60 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è Poisoned, questo attacco infligge 60 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"{} ist\" v1=\"{}\" ], fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Poisoned, este ataque causará 60 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 Poisoned[Gr:Patchim v=\"이/가\" ]라면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card