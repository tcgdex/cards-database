import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Elgyem",
		fr: "Lewsor",
		de: "Pygraulon",
		it: "Elgyem",
		pt: "Elgyem",
		es: "Elgyem",
		'es-mx': "Elgyem"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Slight Shift",
			fr: "Léger Déplacement",
			de: "Leichte Bewegung",
			it: "Lieve Spostamento",
			pt: "Deslocamento Discreto",
			es: "Pequeño Cambio",
			'es-mx': "Movidita"
		},

		effect: {
			en: "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon.",
			fr: "Déplacez une Énergie de l'un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
			de: "Verschiebe 1 Energie von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon.",
			it: "Sposta un'Energia da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
			pt: "Mova uma Energia de 1 dos Pokémon do seu oponente para outro Pokémon dele.",
			es: "Mueve 1 Energía de uno de los Pokémon de tu rival a otro de sus Pokémon.",
			'es-mx': "Mueve 1 Energía de 1 de los Pokémon de tu rival a otro de sus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Beam",
			fr: "Rayon",
			de: "Strahl",
			it: "Raggio",
			pt: "Feixe",
			es: "Transmisión",
			'es-mx': "Rayo"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835988
	}
}

export default card