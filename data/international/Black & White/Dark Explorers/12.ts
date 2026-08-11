import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sand-Attack",
				'fr-fr': "Jet de Sable"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Slash",
				'fr-fr': "Flamme Tranchante"
			},
			effect: {
				'en-us': "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie  attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Inhaled air is heated in the flame sac in its body to an intense fire over 3,000 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 280340,
		tcgplayer: 85500
	}
}

export default card
