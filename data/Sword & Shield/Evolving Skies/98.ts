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
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Shin Nagasawa",

	attacks: [{
		name: {
			en: "Hard Head",
			fr: "Tête Dure",
			es: "Cabeza Dura",
			it: "Testa Solida",
			pt: "Hard Head",
			de: "Harte Birne"
		},

		effect: {
			en: "During your opponent’s next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "During your opponent’s next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It protects itself with its durable skin. It’s thought that this Pokémon will evolve once its skin has completely stretched out."
	},

	dexId: [559]
}

export default card
