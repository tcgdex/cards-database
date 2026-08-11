import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'de-de': "Bisasam",
		'pt-br': "Bulbasaur",
		'ko-kr': "이상해씨"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	dexId: [1],
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'de-de': "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			'ko-kr': "덩굴채찍"
		},

		cost: ["Grass", "Colorless"],
		damage: 40
	}],

	hp: 70,

	description: {
		'en-us': "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.",
		'fr-fr': "Il y a une graine sur son dos depuis sa naissance.\nElle grossit un peu chaque jour.",
		'es-es': "Este Pokémon nace con una semilla en el\nlomo, que brota con el paso del tiempo.",
		'it-it': "Fin dalla nascita questo Pokémon ha sulla\nschiena un seme che cresce lentamente.",
		'de-de': "Dieses Pokémon trägt von Geburt an einen\nSamen auf dem Rücken, der im Laufe der Zeit\nkeimt und wächst.",
		'pt-br': "Este Pokémon já nasce com uma semente\nnas costas. Aos poucos, a semente cresce.",
		'ko-kr': "태어났을 때부터 등에\n식물의 씨앗이 있으며\n조금씩 크게 자란다."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
