import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'de-de': "Hypno",
		'pt-br': "Hypno",
		'ko-kr': "슬리퍼"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",

	dexId: [97],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Drowzee"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sleep Pendulum",
			'fr-fr': "Pendulo Dodo",
			'es-es': "Péndulo de sueño",
			'it-it': "Ipnopendolo",
			'de-de': "Schlafpendel",
			'pt-br': "Pêndulo do Sono",
			'ko-kr': "잠듦의 추"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon jetzt schläft.",
			
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Adormecido."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de Poing Psy",
			'es-es': "Psicopuño",
			'it-it': "Psicopugno",
			'de-de': "Psyhieb",
			'pt-br': "Soco Psíquico",
			'ko-kr': "사이코펀치"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
		'fr-fr': "Lorsqu'il croise le regard de son adversaire, il utilise\nde nombreux pouvoirs surnaturels comme l'hypnose.",
		'es-es': "Cuando mira al enemigo, usa diversos\npoderes psíquicos como la hipnosis.",
		'it-it': "Quando cattura lo sguardo del\nnemico, usa una varietà di poteri\npsichici come, ad esempio, l'ipnosi.",
		'de-de': "Es heißt, wenn dieses Pokémon einem Gegner\nins Auge blicke, setze es zahlreiche Psycho-Kräfte\nwie beispielsweise Hypnose ein.",
		'pt-br': "Quando encara um inimigo, usa uma mistura de\nmovimentos psíquicos, como Hipnose e Confusão.",
		'ko-kr': "상대와 눈이 마주쳤을 때\n최면술 등의 다양한 초능력을\n사용한다고 전해진다."
	},

	boosters: ["pikachu"]
}

export default card
