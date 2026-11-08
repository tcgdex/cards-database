import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
	},


	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'es-mx': "Deoxys",
		'de-de': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psyspeed",
			'fr-fr': "Vitesse Psy",
			'es-es': "Psicovelocidad",
			'es-mx': "Psicovelocidad",
			'de-de': "Psytempo",
			'it-it': "Velocità Psichica",
			'pt-br': "Velocidade Psíquica"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			'en-us': "You may draw cards until you have 5 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			'es-es': "Puedes robar cartas hasta tener 5 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere cinque carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 5 cartas na sua mão."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886426,
				tcgplayer: 693477
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886426,
				tcgplayer: 693477
			}
		},
	],
}

export default card
