import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		de: "Hypno",
		'pt-br': "Hypno",
		ko: "슬리퍼"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Drowzee"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Sleep Pendulum",
			fr: "Pendulo Dodo",
			es: "Péndulo de sueño",
			it: "Ipnopendolo",
			de: "Schlafpendel",
			'pt-br': "Pêndulo do Sono",
			ko: "잠듦의 추"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon jetzt schläft.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Asleep.",
			ko: "자신의 차례에 1번 사용할 수 있다. 동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Adormecido."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
			es: "Psicopuño",
			it: "Psicopugno",
			de: "Psyhieb",
			'pt-br': "Soco Psíquico",
			ko: "사이코펀치"
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
		en: "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
		fr: "Lorsqu'il croise le regard de son adversaire, il utilise\nde nombreux pouvoirs surnaturels comme l'hypnose.",
		es: "Cuando mira al enemigo, usa diversos\npoderes psíquicos como la hipnosis.",
		it: "Quando cattura lo sguardo del\nnemico, usa una varietà di poteri\npsichici come, ad esempio, l'ipnosi.",
		de: "Es heißt, wenn dieses Pokémon einem Gegner\nins Auge blicke, setze es zahlreiche Psycho-Kräfte\nwie beispielsweise Hypnose ein.",
		'pt-br': "Quando encara um inimigo, usa uma mistura de\nmovimentos psíquicos, como Hipnose e Confusão.",
		ko: "상대와 눈이 마주쳤을 때\n최면술 등의 다양한 초능력을\n사용한다고 전해진다."
	}
}

export default card
