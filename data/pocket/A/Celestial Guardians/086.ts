import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
		'es-es': "Cosmoem",
		'it-it': "Cosmoem",
		'de-de': "Cosmovum",
		'pt-br': "Cosmoem",
		'ko-kr': "코스모움"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [790],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Cosmog"
	},

	description: {
		'en-us': "The king who ruled Alola in times of antiquity called it\nthe “cocoon of the stars” and built an altar to worship it.",
		'fr-fr': "Un antique roi d'Alola lui a donné\nle surnom de \" cocon céleste \" et a\nmême érigé un autel en son honneur.",
		'es-es': "En la antigüedad, un rey de Alola lo apodó Crisálida\nde las Estrellas y erigió un altar en su honor.",
		'it-it': "Un antico re di Alola gli diede il nome di \"Bozzolo\ndi stella\" e costruì un altare per venerarlo.",
		'de-de': "Ein vor Urzeiten über Alola herrschender König nannte es\n\"Sternenkokon\" und erbaute ihm zu Ehren ein Podium.",
		'pt-br': "O rei antigo que governou Alola chamava este Pokémon\nde \"casulo de estrelas\" e construiu um altar para adorá-lo.",
		'ko-kr': "먼 옛날 알로라를 지배하던\n왕은 별의 고치라고 부르며\n숭상하기 위한 제단을 만들었다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Stiffen",
			'fr-fr': "Raidissement",
			'es-es': "Endurecimiento",
			'it-it': "Indurimento",
			'de-de': "Verhärten",
			'pt-br': "Fortificar",
			'ko-kr': "딱딱해지기"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −50 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 50 dégâts provenant des attaques.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen -50 puntos de daño a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -50 danni dagli attacchi.",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 50 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −50 pontos de dano de ataques.",
			'ko-kr': "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -50한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card
