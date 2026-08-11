import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
	},


	name: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		'es-mx': "Chespin",
		de: "Igamaro",
		it: "Chespin",
		pt: "Chespin"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [650],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			'es-mx': "Golpeteo",
			de: "Verprügler",
			it: "Battuta",
			pt: "Pulso"
		},

		cost: ["Grass"],
		damage: 10
	}, {
		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			es: "Picotazo Púas",
			'es-mx': "Piquete de Púas",
			de: "Stachelstich",
			it: "Aculeopuntura",
			pt: "Ferroada de Espinhos"
		},

		cost: ["Grass", "Grass"],
		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886479,
				tcgplayer: 693462
			}
		},
	],
}

export default card
