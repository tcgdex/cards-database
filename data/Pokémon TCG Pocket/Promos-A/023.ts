import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		es: "Bulbasaur",
		it: "Bulbasaur",
		de: "Bisasam",
		'pt-br': "Bulbasaur",
		ko: "이상해씨"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	dexId: [1],
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			de: "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			ko: "덩굴채찍"
		},

		cost: ["Grass", "Colorless"],
		damage: 40
	}],

	hp: 70,

	description: {
		en: "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.",
		fr: "Il y a une graine sur son dos depuis sa naissance.\nElle grossit un peu chaque jour.",
		es: "Este Pokémon nace con una semilla en el\nlomo, que brota con el paso del tiempo.",
		it: "Fin dalla nascita questo Pokémon ha sulla\nschiena un seme che cresce lentamente.",
		de: "Dieses Pokémon trägt von Geburt an einen\nSamen auf dem Rücken, der im Laufe der Zeit\nkeimt und wächst.",
		'pt-br': "Este Pokémon já nasce com uma semente\nnas costas. Aos poucos, a semente cresce.",
		ko: "태어났을 때부터 등에\n식물의 씨앗이 있으며\n조금씩 크게 자란다."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
