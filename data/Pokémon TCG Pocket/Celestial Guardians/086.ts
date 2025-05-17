import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		de: "Cosmovum",
		'pt-br': "Cosmoem",
		ko: "코스모움"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Cosmog"
	},

	description: {
		en: "The king who ruled Alola in times of antiquity called it\nthe “cocoon of the stars” and built an altar to worship it.",
		fr: "Un antique roi d'Alola lui a donné\nle surnom de \" cocon céleste \" et a\nmême érigé un autel en son honneur.",
		es: "En la antigüedad, un rey de Alola lo apodó Crisálida\nde las Estrellas y erigió un altar en su honor.",
		it: "Un antico re di Alola gli diede il nome di \"Bozzolo\ndi stella\" e costruì un altare per venerarlo.",
		de: "Ein vor Urzeiten über Alola herrschender König nannte es\n\"Sternenkokon\" und erbaute ihm zu Ehren ein Podium.",
		'pt-br': "O rei antigo que governou Alola chamava este Pokémon\nde \"casulo de estrelas\" e construiu um altar para adorá-lo.",
		ko: "먼 옛날 알로라를 지배하던\n왕은 별의 고치라고 부르며\n숭상하기 위한 제단을 만들었다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stiffen",
			fr: "Raidissement",
			es: "Endurecimiento",
			it: "Indurimento",
			de: "Verhärten",
			'pt-br': "Fortificar",
			ko: "딱딱해지기"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −50 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 50 dégâts provenant des attaques.",
			es: "Durante el próximo turno de tu rival, los ataques hacen -50 puntos de daño a este Pokémon.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -50 danni dagli attacchi.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 50 Schadenspunkte zugefügt.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá −50 pontos de dano de ataques.",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -50한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card
