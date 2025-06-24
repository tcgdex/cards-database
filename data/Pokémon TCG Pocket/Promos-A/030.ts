import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		de: "Evoli",
		'pt-br': "Eevee",
		ko: "이브이"
	},

	illustrator: "En Morikura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
		fr: "Ses multiples évolutions lui permettent\nde s'adapter à tout type de milieu naturel.",
		es: "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
		it: "La capacità di evolversi in diverse specie gli permette\ndi adattarsi perfettamente a qualsiasi tipo di ambiente.",
		de: "Um sich jeder Umgebung perfekt anpassen zu\nkönnen, ist es in der Lage, sich zu verschiedenen\nPokémon zu entwickeln.",
		'pt-br': "Sua capacidade de evoluir para muitas formas\npermite que se adapte fácil e perfeitamente\na qualquer ambiente.",
		ko: "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement",
			es: "Gruñido",
			it: "Ruggito",
			de: "Heuler",
			'pt-br': "Rosnadura",
			ko: "울음소리"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon − 20 Schadenspunkte zu.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬이 사용하는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol3"]
}

export default card
