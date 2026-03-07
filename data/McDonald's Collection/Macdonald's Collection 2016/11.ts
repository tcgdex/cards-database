import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	description: {
		en: "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Act Tough",
			fr: "Dur à Cuire"
		},

		damage: "10+",

		effect: {
			en: "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage.",
			fr: "Si de l'Énergie  est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	name: {
		en: "Meowth",
		fr: "Miaouss"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275067
	}
}

export default card