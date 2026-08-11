import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Incineroar ex",
		'fr-fr': "Félinferno-ex",
		'es-es': "Incineroar ex",
		'it-it': "Incineroar-ex",
		'de-de': "Fuegro-ex",
		'pt-br': "Incineroar ex",
		'ko-kr': "어흥염 ex"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [727],
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Torracat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Fire Fang",
			'fr-fr': "Crocs Feu",
			'es-es': "Colmillo Ígneo",
			'it-it': "Rogodenti",
			'de-de': "Feuerzahn",
			'pt-br': "Presas de Fogo",
			'ko-kr': "불꽃엄니"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}, {
		name: {
			'en-us': "Scar-Charged Smash",
			'fr-fr': "Frappe Balafre",
			'es-es': "Hacer Cicatrizas",
			'it-it': "Colpo Rabbioso",
			'de-de': "Narbenhieb",
			'pt-br': "Destruir a Cicatriz",
			'ko-kr': "스카스매시"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
			'es-es': "Si este Pokémon ya tiene daño, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon è danneggiato, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon estiver danificado, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "이 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card