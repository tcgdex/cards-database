import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'de-de': "Staraptor",
		'pt-br': "Staraptor",
		'ko-kr': "찌르호크"
	},

	illustrator: "Ryota Murayama",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [398],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Staravia"
	},

	description: {
		'en-us': "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
		'fr-fr': "Quand Étourvol évolue en Étouraptor, il quitte son groupe\npour vivre seul. Ses ailes sont très souples et puissantes.",
		'es-es': "Al evolucionar a Staraptor, deja su bandada y\npasa a vivir en soledad. Sus alas son inmensas.",
		'it-it': "Non appena si evolve, lascia lo stormo e affronta la\nvita da solo. Le sue ali sono estremamente robuste.",
		'de-de': "Entwickelt sich Staravia zu Staraptor, verlässt es\nden Schwarm und lebt allein. Die Spannweite\nseiner Flügel ist gigantisch.",
		'pt-br': "Quando um Staravia evolui para Staraptor,\ndeixa o bando para viver sozinho. Têm asas robustas.",
		'ko-kr': "찌르호크가 되면 무리에서\n떨어져 혼자서 살아간다.\n강인한 날개를 가지고 있다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'de-de': "Greifer",
			'pt-br': "Agarramento",
			'ko-kr': "꽉쥐기"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

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
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
