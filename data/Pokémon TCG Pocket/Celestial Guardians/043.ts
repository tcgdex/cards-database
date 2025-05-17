import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cloyster",
		fr: "Crustabri",
		es: "Cloyster",
		it: "Cloyster",
		de: "Austos",
		'pt-br': "Cloyster",
		ko: "파르셀"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Shellder"
	},

	description: {
		en: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
		fr: "Les Crustabri vivant dans des mers aux courants\nforts développent des dards particulièrement\nimposants et aiguisés sur leur coquille.",
		es: "A los Cloyster que viven en las fuertes corrientes\nmarinas les crecen largas y afiladas púas en la concha.",
		it: "Ai Cloyster che vivono in mari con forti correnti\ncrescono grandi aculei appuntiti sul guscio.",
		de: "Austos, die in Meeren mit starker\nStrömung leben, entwickeln große\nund scharfe Stacheln an ihrer Schale.",
		'pt-br': "Cloyster que vivem em mares com correntes\nintensas desenvolvem espinhos grandes\ne afiados em suas conchas.",
		ko: "조수의 흐름이 격한 바다에 서식하는\n파르셀의 껍데기에 붙은 가시는\n크고 날카롭다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			es: "Presión de Guardia",
			it: "Pressadifesa",
			de: "Schutzdruck",
			'pt-br': "Aperto Protetor",
			ko: "가드프레스"
		},

		damage: 50,
		cost: ["Water", "Water"],

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

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card