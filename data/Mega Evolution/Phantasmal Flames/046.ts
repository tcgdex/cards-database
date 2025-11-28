import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Bramblin",
		fr: "Virovent",
		es: "Bramblin",
		'es-mx': "Bramblin",
		de: "Weherba",
		it: "Bramblin",
		pt: "Bramblin"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [946],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [946],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Sneaky Placement",
			fr: "Placement Vicieux",
			es: "Colocación Furtiva",
			'es-mx': "Distribución Furtiva",
			de: "Heimlichtuerei",
			it: "Furtivappoggio",
			pt: "Posição Sorrateira"
		},

		effect: {
			en: "Place 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Placez un marqueur de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Pon 1 contador de daño en uno de los Pokémon de tu rival.",
			'es-mx': "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
			de: "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners.",
			it: "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
			pt: "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857621
	}
}

export default card