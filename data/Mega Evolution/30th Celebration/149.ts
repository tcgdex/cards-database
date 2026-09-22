import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		de: "Pikachu-ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		'es-mx': "Pikachu ex"
	},

	illustrator: "kantaro",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Pika-Pika Parade",
			fr: "Parade Pika-Pika",
			de: "Pika-Pika-Parade",
			es: "Desfile Pika Pika",
			it: "Corteo Pika Pika",
			'es-mx': "Pikadesfile"
		},

		effect: {
			en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck le nombre voulu de Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach beliebig vielen Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			es: "Busca en tu baraja cualquier cantidad de Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un numero qualsiasi di Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo cualquier cantidad de Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			de: "Donnerblitz",
			es: "Rayo",
			it: "Fulmine",
			'es-mx': "Atactrueno"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907756,
				tcgplayer: 712953
			}
		}
	],
}

export default card
