import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omanyte",
		fr: "Amonita",
		es: "Omanyte",
		it: "Omanyte",
		de: "Amonitas",
		'pt-br': "Omanyte",
		ko: "암나이트"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Helix Fossil"
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
		fr: "Ce Pokémon commence à poser problème,\ncar certains spécimens se sont enfuis ou\nont été relâchés après avoir été ressuscités.",
		es: "Varios ejemplares han escapado o bien han\nsido liberados tras su restauración, lo que\ncomienza a suscitar una serie de problemas.",
		it: "Questo Pokémon si sta rivelando un problema\nperché a volte fugge o viene liberato dopo\nessere stato rigenerato.",
		de: "Diese Pokémon entwickeln sich allmählich zu\neinem Problem, da einige wiederbelebte\nExemplare fliehen oder freigelassen werden.",
		'pt-br': "Alguns Omanyte escapam após serem restaurados\nou são soltos por pessoas na natureza. Por conta\ndisso, esta espécie está se tornando um problema.",
		ko: "복원된 후 도망치거나\n놓쳐버리는 경우가 생겨서\n문제시되고 있다."
	},

	boosters: ["pikachu"]
}

export default card
