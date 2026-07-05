import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		en: "Lillipup",
		fr: "Ponchiot",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Pickup",
			fr: "Ramassage"
		},
		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main."
		}
	}, {
		cost: [
			"Colorless",
		],
		name: {
			en: "Bite",
			fr: "Morsure"
		},
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "It faces strong opponents with great courage. But, when at a disadvantage in a fight, this intelligent Pokémon flees."
	},

	retreat: 1,

}

export default card
