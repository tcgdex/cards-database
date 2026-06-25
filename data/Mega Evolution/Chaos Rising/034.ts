import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
	},


	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		'es-mx': "Deoxys",
		de: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys"
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
			en: "Psyspeed",
			fr: "Vitesse Psy",
			es: "Psicovelocidad",
			'es-mx': "Psicovelocidad",
			de: "Psytempo",
			it: "Velocità Psichica",
			pt: "Velocidade Psíquica"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			en: "You may draw cards until you have 5 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			es: "Puedes robar cartas hasta tener 5 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			de: "Du kannst so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere cinque carte in mano.",
			pt: "Você pode comprar cartas até ter 5 cartas na sua mão."
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
	],
}

export default card
