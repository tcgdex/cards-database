import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Shellder"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Shell Armor",
			fr: "Coque Armure"
		},

		effect: {
			en: "This Pokémon takes -10 damage from attacks.",
			fr: "Ce Pokémon subit − 10 dégâts provenant des attaques."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf"
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
		en: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
		fr: "Les Crustabri vivant dans des mers aux courants\nforts développent des dards particulièrement\nimposants et aiguisés sur leur coquille.",
		es: "A los Cloyster que viven en las fuertes corrientes\nmarinas les crecen largas y afiladas púas en la concha.",
		it: "Ai Cloyster che vivono in mari con forti correnti\ncrescono grandi aculei appuntiti sul guscio.",
		de: "Austos, die in Meeren mit starker\nStrömung leben, entwickeln große\nund scharfe Stacheln an ihrer Schale.",
		'pt-br': "Cloyster que vivem em mares com correntes\nintensas desenvolvem espinhos grandes\ne afiados em suas conchas.",
		ko: "조수의 흐름이 격한 바다에 서식하는\n파르셀의 껍데기에 붙은 가시는\n크고 날카롭다."
	}
}

export default card
