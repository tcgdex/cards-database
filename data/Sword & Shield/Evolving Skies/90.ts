import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],
	stage: "Stage2",
	illustrator: "Pani Kobayashi",

	attacks: [{
		name: {
			en: "Shaky Wave",
			fr: "Onde Tremblante",
			es: "Onda Tambaleante",
			it: "Onda Tremula",
			pt: "Shaky Wave",
			de: "Wankender Boden"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon’s attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di Colorless e il suo costo di ritirata aumenta di Colorless.",
			pt: "During your opponent’s next turn, the Defending Pokémon’s attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um Colorless, und seine Rückzugskosten erhöhen sich um Colorless."
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hyper Voice",
			de: "Schallwelle"
		},

		damage: 160,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	description: {
		en: "This Pokémon is popular among the elderly, who say the vibrations of its lumps are great for massages."
	},

	dexId: [537]
}

export default card