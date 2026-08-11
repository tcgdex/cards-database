import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'de-de': "Schlurplek"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tongue Reel",
				'fr-fr': "Langue enroulante",
				'de-de': "Tongue Reel"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. If you choose a Benched Pokémon, switch the Defending Pokémon with that Pokémon. This attack does 20 damage to the Pokémon you chose. Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Si vous choisissez un Pokémon de Banc, échangez le Pokémon Défenseur avec ce Pokémon. Cette attaque inflige 20 dégâts au Pokémon choisi. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Choose 1 of your opponent's Pokémon. If you choose a Benched Pokémon, switch the Defending Pokémon with that Pokémon. This attack does 20 damage to the Pokémon you chose. Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Boundless Power",
				'fr-fr': "Puissance illimitée",
				'de-de': "Boundless Power"
			},
			effect: {
				'en-us': "During your next turn, Lickilicky can't attack.",
				'fr-fr': "Lors de votre prochain tour, Coudlangue ne peut pas attaquer.",
				'de-de': "During your next turn, Lickilicky can't attack."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It wraps things with its extensible tongue. Getting to close to it will leave you soaked with drool.",
	},

	thirdParty: {
		cardmarket: 277765,
		tcgplayer: 86712
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
