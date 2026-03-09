import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Charge Beam",
			fr: "Rayon Chargé"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, attach an Energy card from your discard pile to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cherchez une carte Énergie dans votre pile de défausse et attachez-la à ce Pokémon."
		}
	}, {
		name: {
			en: "Irongrip",
			fr: "Poigne de Fer"
		},

		damage: 20
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Klink",
		fr: "Tic"
	},

	rarity: "None",
	hp: 50,
	types: ["Metal"],

	thirdParty: {
		tcgplayer: 86480
	}
}

export default card