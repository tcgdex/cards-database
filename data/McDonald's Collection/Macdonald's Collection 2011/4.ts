import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse",
			fr: "Vibraqua"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi."
		}
	}],

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	name: {
		en: "Oshawott",
		fr: "Moustillon"
	},

	rarity: "None",
	hp: 60,
	types: ["Water"],

	thirdParty: {
		tcgplayer: 87893
	}
}

export default card