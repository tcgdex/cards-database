import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		en: "Iono's Voltorb",
		fr: "Voltorbe de Mashynn",
		es: "Voltorb de e-Nigma",
		de: "Enigmaras Voltobal",
		it: "Voltorb di Kissara",
		pt: "Voltorb da Kissera",
		'es-mx': "Voltorb de e-Nigma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Voltaic Chain",
			fr: "Chaîne Voltaïque",
			es: "Cadena Voltaica",
			de: "Voltaische Kette",
			it: "Catena Voltaica",
			pt: "Corrente Voltaica",
			'es-mx': "Cadena Voltaica"
		},

		effect: {
			en: "This attack does 20 more damage for each {L} Energy attached to all of your Iono's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon de Mashynn.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {L} unida a cada uno de tus Pokémon de e-Nigma.",
			de: "Diese Attacke fügt für jede an alle deine Enigmaras Pokémon angelegte {L}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon di Kissara.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon da Kissera.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía Lightning unida a cada uno de tus Pokémon de e-Nigma."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Kazumasa Yasukuni",

	thirdParty: {
		cardmarket: 817199
	}
}

export default card