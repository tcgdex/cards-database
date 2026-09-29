import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Because of the way it floats aimlessly, an old folktale calls it a “signpost for wandering spirits.”"
	},

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon",
		es: "Drifloon",
		it: "Drifloon",
		'es-mx': "Drifloon",
		pt: "Drifloon"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [425],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Float Up",
			fr: "Flottement",
			de: "Hinaufschweben",
			es: "Flotar en el Aire",
			it: "Sospensione",
			'es-mx': "Flotar en el Aire",
			pt: "Voo Flutuante"
		},

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck.",
			fr: "Vous pouvez mélanger avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja, y barajar todas las cartas.",
			it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'es-mx': "Puedes barajar este Pokémon y todas las cartas unidas a él en tu mazo.",
			pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho."
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907680,
				tcgplayer: 716469
			}
		}
	],
}

export default card
