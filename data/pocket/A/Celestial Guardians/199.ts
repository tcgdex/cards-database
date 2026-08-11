import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dhelmise ex",
		'fr-fr': "Sinistrail-ex",
		'es-es': "Dhelmise ex",
		'it-it': "Dhelmise-ex",
		'de-de': "Moruda-ex",
		'pt-br': "Dhelmise ex",
		'ko-kr': "타타륜 ex"
	},

	illustrator: "IKEDA Saki",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [781],
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Anchor Shot",
			'fr-fr': "Ancrage",
			'es-es': "Anclaje",
			'it-it': "Colpo d'Ancora",
			'de-de': "Ankerschuss",
			'pt-br': "Tiro de Âncora",
			'ko-kr': "앵커샷"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'ko-kr': "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card