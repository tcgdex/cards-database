import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'es-es': "Cloyster",
		'it-it': "Cloyster",
		'de-de': "Austos",
		'pt-br': "Cloyster",
		'ko-kr': "파르셀"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [91],
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Shellder"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shell Armor",
			'fr-fr': "Coque Armure",
			'es-es': "Caparazón",
			'it-it': "Guscioscudo",
			'de-de': "Panzerhaut",
			'pt-br': "Armadura de Concha",
			'ko-kr': "조가비갑옷"
		},

		effect: {
			'en-us': "This Pokémon takes -10 damage from attacks.",
			'fr-fr': "Ce Pokémon subit − 10 dégâts provenant des attaques.",
			'es-es': "Los ataques hacen -10 puntos de daño a este Pokémon.",
			'it-it': "Questo Pokémon subisce -10 danni dagli attacchi.",
			'de-de': "Diesem Pokémon werden durch Attacken − 10 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −10 pontos de dano de ataques.",
			'ko-kr': "이 포켓몬이 받는 기술의 데미지를 -10한다."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'de-de': "Surfer",
			'pt-br': "Surfar",
			'ko-kr': "파도타기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		'en-us': "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
		'fr-fr': "Les Crustabri vivant dans des mers aux courants\nforts développent des dards particulièrement\nimposants et aiguisés sur leur coquille.",
		'es-es': "A los Cloyster que viven en las fuertes corrientes\nmarinas les crecen largas y afiladas púas en la concha.",
		'it-it': "Ai Cloyster che vivono in mari con forti correnti\ncrescono grandi aculei appuntiti sul guscio.",
		'de-de': "Austos, die in Meeren mit starker\nStrömung leben, entwickeln große\nund scharfe Stacheln an ihrer Schale.",
		'pt-br': "Cloyster que vivem em mares com correntes\nintensas desenvolvem espinhos grandes\ne afiados em suas conchas.",
		'ko-kr': "조수의 흐름이 격한 바다에 서식하는\n파르셀의 껍데기에 붙은 가시는\n크고 날카롭다."
	},

	boosters: ["mewtwo"]
}

export default card
