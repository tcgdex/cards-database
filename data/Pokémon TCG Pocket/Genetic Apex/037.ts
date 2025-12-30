import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		de: "Vulpix",
		'pt-br': "Vulpix",
		ko: "식스테일"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",

	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whip",
			fr: "Mimi-Queue",
			es: "Látigo",
			it: "Colpocoda",
			de: "Rutenschlag",
			'pt-br': "Cauda Chicote",
			ko: "꼬리흔들기"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo\nturno del tuo avversario, il Pokémon difensore non può\nattaccare.",
			de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante o próximo turno do seu oponente.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 기술을 받은 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
		fr: "Quand il est jeune, ce Pokémon a six queues magnifiques.\nDe nouvelles queues apparaissent tout au long de sa croissance.",
		es: "De pequeño, tiene seis colas de gran belleza.\nA medida que crece, le van saliendo más.",
		it: "Quando è giovane ha sei meravigliose code,\nche si moltiplicano durante la sua crescita.",
		de: "In seiner Jugend hat es sechs hinreißende\nSchweife. Während es wächst, kommen noch\nweitere neue Schweife hinzu.",
		'pt-br': "Quando é jovem, tem seis belas caudas.\nQuando cresce, várias novas caudas brotam.",
		ko: "어리지만 6개의 꼬리가\n아름답다. 성장하면\n한층 꼬리 수가 늘어난다."
	},

	boosters: ["charizard"]
}

export default card
