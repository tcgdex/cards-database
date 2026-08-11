import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu Libre",
		'fr-fr': "Pikachu Catcheur",
		'es-es': "Pikachu Enmascarada",
		'it-it': "Pikachu wrestler",
		'pt-br': "Pikachu Mascarada",
		'de-de': "Wrestler-Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Yoshinobu Saito",

	description: {
		'en-us': "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
	},

	attacks: [{
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
		}
	}, {
		name: {
			'en-us': "Flying Elekick",
			'fr-fr': "Coup Élec' Volant"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118820
	}
}

export default card