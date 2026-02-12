import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "N's Darumaka",
		fr: "Darumarond de N",
		es: "Darumaka de N",
		'es-mx': "Darumaka de N",
		de: "Ns Flampion",
		it: "Darumaka di N",
		pt: "Darumaka do N"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			'es-mx': "Tacleada Rodante",
			de: "Rolltackle",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			'es-mx': "Llama",
			de: "Flackern",
			it: "Fiammata",
			pt: "Chama"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675844,
		cardmarket: 869643
	}
}

export default card