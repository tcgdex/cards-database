import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	description: {
		en: "The Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Withdraw",
			fr: "Repli"
		},

		effect: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques durant le prochain tour de votre adversaire."
		}
	}, {
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 20
	}],

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	name: {
		en: "Dwebble",
		fr: "Crabicoque"
	},

	rarity: "None",
	hp: 60,
	types: ["Grass"],

	thirdParty: {
		tcgplayer: 85065
	}
}

export default card