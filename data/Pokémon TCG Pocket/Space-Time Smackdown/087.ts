import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regirock",
		fr: "Regirock",
		es: "Regirock",
		it: "Regirock",
		de: "Regirock",
		'pt-br': "Regirock",
		ko: "레지락"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "Every bit of Regirock's body is made of stone. As parts of its body erode, this Pokémon sticks rocks to itself to repair what's been lost.",
		fr: "Il est entièrement composé de pierre. Si jamais une partie\nde son corps s'effrite, il la répare en y collant des rochers.",
		es: "Todo su cuerpo está hecho de roca. Si alguna\nparte se erosiona, la recompone con más rocas.",
		it: "Le varie parti del suo corpo sono costituite\nda rocce. Nel caso in cui si sgretoli, può\nricomporre il suo organismo con nuove pietre.",
		de: "Sein Körper besteht vollständig aus Steinen.\nWenn Teile davon abbröckeln, ersetzt Regirock\ndiese einfach durch neue Steine.",
		'pt-br': "Cada parte do corpo de Regirock é feito de rocha.\nÀ medida que partes do seu corpo erodem, este Pokémon\nfixa pedras em si mesmo para consertar os pedaços que perdeu.",
		ko: "몸의 모든 부분이 바위로 되어 있다.\n몸이 깎이더라도\n스스로 바위를 붙여서 치료한다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
			es: "Exoesqueleto",
			it: "Esoscheletro",
			de: "Exoskelett",
			'pt-br': "Exoesqueleto",
			ko: "딱딱한몸"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
			it: "Questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Diesem Pokémon werden durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −20 pontos de dano de ataques.",
			ko: "이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	attacks: [{
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			de: "Felsenquetscher",
			'pt-br': "Rocha Esmagadora",
			ko: "록스매시"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
