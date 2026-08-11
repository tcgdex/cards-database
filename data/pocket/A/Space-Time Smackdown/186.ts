import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile ex",
		'fr-fr': "Dimoret-ex",
		'es-es': "Weavile ex",
		'it-it': "Weavile-ex",
		'de-de': "Snibunna-ex",
		'pt-br': "Weavile ex",
		'ko-kr': "포푸니라 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [461],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sneasel"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Scratching Nails",
			'fr-fr': "Griffes Griffantes",
			'es-es': "Uñas Rasgadoras",
			'it-it': "Unghie Graffianti",
			'de-de': "Kratzende Krallen",
			'pt-br': "Unhas Arranhadoras",
			'ko-kr': "스크래치네일"
		},

		damage: "30+",
		cost: ["Darkness"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has damage on it, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 40 dégâts de plus.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 40 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 40 danni in più.",
			'de-de': "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 40 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 데미지를 받고 있다면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
