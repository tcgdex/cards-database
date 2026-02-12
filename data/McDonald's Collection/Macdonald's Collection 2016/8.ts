import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	description: {
		en: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody."
	},
	

	types: ["Fairy",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade"
		},

		damage: 10
	}, {
		name: {
			en: "Heartfelt Song",
			fr: "Chanson du Cœur"
		},

		effect: {
			en: "Discard a Darkness Energy attached to your opponent’s Active Pokémon.",
			fr: "Défaussez une Énergie  attachée au Pokémon Actif de votre adversaire."
		}
	}],

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275064
	}
}

export default card