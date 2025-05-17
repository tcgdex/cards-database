import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		de: "Driftlon",
		'pt-br': "Drifloon",
		ko: "흔들풍손"
	},

	illustrator: "Orca",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.",
		fr: "On dit que les jeunes enfants qui agrippent Baudrive après\nl'avoir pris pour un ballon disparaissent sans laisser de traces.",
		es: "Se dice que a veces desaparecen niños que\nagarran un Drifloon pensando que es un globo.",
		it: "Si dice che i bambini piccoli possano scomparire nel nulla\nse tengono un Drifloon scambiandolo per un palloncino.",
		de: "So manches kleine Kind soll schon verschwunden\nsein, weil es ein Driftlon festhielt, das es mit\neinem Ballon verwechselt hatte.",
		'pt-br': "Diz-se por aí que se uma criança confundir Drifloon\ncom um balão e o segurar, poderá acabar desaparecendo.",
		ko: "풍선으로 착각해 흔들풍손을\n가지고 있었던 어린아이가\n사라지는 경우가 있다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Expand",
			fr: "Développement",
			es: "Expandir",
			it: "Espansione",
			de: "Ausdehnen",
			'pt-br': "Expandir",
			ko: "부풀기"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
