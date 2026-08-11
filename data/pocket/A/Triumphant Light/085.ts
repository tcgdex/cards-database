import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Probopass ex",
		'fr-fr': "Tarinorme-ex",
		'es-es': "Probopass ex",
		'it-it': "Probopass-ex",
		'de-de': "Voluminas-ex",
		'pt-br': "Probopass ex",
		'ko-kr': "대코파스 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [476],
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Nosepass"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Defensive Unit",
			'fr-fr': "Unité Défensive",
			'es-es': "Unidad Protectora",
			'it-it': "Unità Protettiva",
			'de-de': "Schutzeinheit",
			'pt-br': "Unidade Defensiva",
			'ko-kr': "프로텍트유닛"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
			'ko-kr': "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card