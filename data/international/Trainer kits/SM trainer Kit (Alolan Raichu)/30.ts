import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Alolan Raichu",
		'fr-fr': "Raichu d’Alola",
		'es-es': "Raichu de Alola",
		'it-it': "Raichu di Alola",
		'pt-br': "Raichu de Alola",
		'de-de': "Alola-Raichu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "5ban Graphics",

	description: {
		'en-us': "It only evolves to this form in the Alola region. According to researchers, its diet is one of the causes of this change."
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
			'en-us': "Electric Surfer",
			'fr-fr': "Surfeur Électrique"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 297261,
				tcgplayer: 152873
			}
		},
	],

}

export default card