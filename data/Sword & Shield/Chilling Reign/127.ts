import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Scrounge",
			fr: "Fouissage"
		},

		effect: {
			en: "Put a Pokémon Tool card from your discard pile into your hand.",
			fr: "Ajoutez une carte Outil Pokémon de votre pile de défausse à votre main."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card