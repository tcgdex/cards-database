import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Solar Transporter",
				'fr-fr': "Transporteur Solaire",
			},
			effect: {
				'en-us': "Reveal the top 5 cards of your deck and put all Team Plasma cards you find there into your hand. Discard the other cards.",
				'fr-fr': "Montrez les 5 cartes du dessus de votre deck et ajoutez toutes les cartes de la Team Plasma que vous y trouvez à votre main. Défaussez les autres cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 50,

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
		'en-us': "Thought to be an embodiment of the sun, it appeared during a bitterly cold winter and saved Pokémon from freezing.",
	},

	thirdParty: {
		cardmarket: 281034,
		tcgplayer: 90405
	}
}

export default card
