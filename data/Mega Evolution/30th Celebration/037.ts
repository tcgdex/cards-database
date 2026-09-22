import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Yuu Nishida",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Energized Tail",
			fr: "Queue Énergisée",
			de: "Energieschweif",
			es: "Cola Energética",
			it: "Coda Energizzata",
			'es-mx': "Cola Energética"
		},

		effect: {
			en: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-mx': "Busca en tu mazo 1 carta de Energía, muéstrala y ponla en tu mano. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pika Punch",
			fr: "Pika-Poing",
			de: "Pikahieb",
			es: "Pika Puño",
			it: "Pika Pugno",
			'es-mx': "Pikapuño"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
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
				cardmarket: 907644,
				tcgplayer: 696681
			}
		}
	],
}

export default card
