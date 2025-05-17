import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lumineon",
		fr: "Luminéon",
		es: "Lumineon",
		it: "Lumineon",
		de: "Lumineon",
		'pt-br': "Lumineon",
		ko: "네오라이트"
	},

	illustrator: "rika",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Finneon"
	},

	description: {
		en: "With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.",
		fr: "La lumière qu'il émet pour attirer ses\nproies attire également ses prédateurs,\ndes Pokémon poissons féroces.",
		es: "Atrae a sus presas con el destello que emite,\naunque eso también llama la atención de sus\nferoces depredadores marinos.",
		it: "Con la sua luce attira le prede, ma anche i feroci\nPokémon acquatici che sono suoi predatori naturali.",
		de: "Mit seinem Licht lockt es Beute an. Leider\nwerden dadurch auch grausame Fisch-Pokémon\nangezogen – seine natürlichen Fressfeinde.",
		'pt-br': "Ao brilhar intensamente, atrai as presas para perto. Porém,\na luz também chega a atrair Pokémon peixe ferozes, seus\npredadores naturais.",
		ko: "빛으로 먹이를 유인하지만\n천적인 사나운 물고기포켓몬까지\n다가온다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			de: "Kaskade",
			'pt-br': "Cachoeira",
			ko: "폭포오르기"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
