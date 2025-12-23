import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		de: "Flegmon",
		'pt-br': "Slowpoke",
		ko: "야돈"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [79],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			de: "Schweifvertrimmer",
			'pt-br': "Surra de Cauda",
			ko: "꼬리로 막치기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
		fr: "Ce Pokémon est très lent et apathique.\nIl lui faut cinq secondes pour ressentir\nla douleur provoquée par une attaque.",
		es: "Increíblemente lento y torpe. Tarda cinco\nsegundos en sentir dolor si lo atacan.",
		it: "Incredibilmente lento e tonto, ci\nmette cinque secondi a percepire\nil dolore dopo essere stato colpito.",
		de: "Ein unglaublich träges und einfältiges Pokémon.\nWenn es angegriffen wird, bemerkt es den\nSchmerz erst fünf Sekunden später.",
		'pt-br': "É extremamente lento e tonto. Demora uns cinco\nsegundos para sentir dor após sofrer um ataque.",
		ko: "움직임이 둔하고 멍청하다.\n맞아도 5초는 지나야\n아픔을 느낄 정도다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
