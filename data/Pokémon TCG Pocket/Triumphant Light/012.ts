import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		de: "Hundemon",
		'pt-br': "Houndoom",
		ko: "헬가"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "If you are burned by the flames it shoots from its mouth, the pain will never go away.",
		fr: "Les blessures provoquées par son souffle enflammé\nsont permanentes, et la douleur ne disparaît jamais.",
		es: "Si alguien se quema con las llamas que lanza\npor la boca, el dolor no desaparecerá nunca.",
		it: "Se si viene ustionati dalle fiamme che sputa\ndalla bocca, il dolore rimarrà per sempre.",
		de: "Wird man von den Flammen getroffen, die es\naus seinem Maul schießt, so erleidet man eine\nBrandwunde, deren Schmerz nie nachlässt.",
		'pt-br': "Se você for queimado pelas chamas disparadas\nde sua boca, a dor nunca passará.",
		ko: "입에서 뿜어내는 불꽃에 의해\n화상을 입으면 시간이 아무리 지나도\n상처 난 자리가 욱신거린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			de: "Bedrängen",
			'pt-br': "Quina",
			ko: "몰아붙이기"
		},

		damage: 60,
		cost: ["Fire", "Colorless"],

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
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card
