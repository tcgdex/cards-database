import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'de-de': "Bronzong",
		'pt-br': "Bronzong",
		'ko-kr': "동탁군"
	},

	illustrator: "Yuka Morii",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [437],
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor"
	},

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
		'fr-fr': "Il a longtemps été vénéré pour avoir apporté\nla pluie. On le trouve parfois enterré dans le sol.",
		'es-es': "Antaño se adoraba a este Pokémon para\nque propiciara lluvias abundantes. A veces,\npuede encontrarse enterrado bajo tierra.",
		'it-it': "È stato venerato per secoli come Pokémon che\nporta la pioggia. A volte lo si trova sepolto nel terreno.",
		'de-de': "Vor Urzeiten wurden sie als Regenmacher verehrt.\nManchmal findet man eines von ihnen im Boden vergraben.",
		'pt-br': "Nas idades antigas, este Pokémon era reverenciado\ncomo aquele que fazia chover. Ele foi descoberto\nenterrado no chão.",
		'ko-kr': "비구름을 부르는 포켓몬으로\n아주 옛날부터 떠받들어졌다.\n가끔 땅에 묻혀 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'it-it': "Pressadifesa",
			'de-de': "Schutzdruck",
			'pt-br': "Aperto Protetor",
			'ko-kr': "가드프레스"
		},

		damage: 60,
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

	retreat: 3,
	boosters: ["dialga"]
}

export default card
