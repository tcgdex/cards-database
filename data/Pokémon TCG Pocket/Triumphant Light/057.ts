import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass ex",
		fr: "Tarinorme-ex",
		es: "Probopass ex",
		it: "Probopass-ex",
		de: "Voluminas-ex",
		'pt-br': "Probopass ex",
		ko: "대코파스 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Nosepass"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Defensive Unit",
			fr: "Unité Défensive",
			es: "Unidad Protectora",
			it: "Unità Protettiva",
			de: "Schutzeinheit",
			'pt-br': "Unidade Defensiva",
			ko: "프로텍트유닛"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card