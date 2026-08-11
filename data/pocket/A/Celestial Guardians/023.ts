import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise ex",
		fr: "Sinistrail-ex",
		es: "Dhelmise ex",
		it: "Dhelmise-ex",
		de: "Moruda-ex",
		'pt-br': "Dhelmise ex",
		ko: "타타륜 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [781],
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Anchor Shot",
			fr: "Ancrage",
			es: "Anclaje",
			it: "Colpo d'Ancora",
			de: "Ankerschuss",
			'pt-br': "Tiro de Âncora",
			ko: "앵커샷"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
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