import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar ex",
		fr: "Félinferno-ex",
		es: "Incineroar ex",
		it: "Incineroar-ex",
		de: "Fuegro-ex",
		'pt-br': "Incineroar ex",
		ko: "어흥염 ex"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
			es: "Colmillo Ígneo",
			it: "Rogodenti",
			de: "Feuerzahn",
			'pt-br': "Presas de Fogo",
			ko: "불꽃엄니"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Burned.",
			it: "Il Pokémon attivo del tuo avversario viene Burned.",
			de: "Das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"ist jetzt {}\" v1=\"{} jetzt\" ].",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Burned.",
			ko: "상대의 배틀 포켓몬을 Burned[Gr:Patchim v=\"으로/로\" ] 만든다."
		}
	}, {
		name: {
			en: "Scar-Charged Smash",
			fr: "Frappe Balafre",
			es: "Hacer Cicatrizas",
			it: "Colpo Rabbioso",
			de: "Narbenhieb",
			'pt-br': "Destruir a Cicatriz",
			ko: "스카스매시"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage.",
			fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
			es: "Si este Pokémon ya tiene daño, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon è danneggiato, questo attacco infligge 60 danni in più.",
			de: "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon estiver danificado, este ataque causará 60 pontos de dano a mais.",
			ko: "이 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card