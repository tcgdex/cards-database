import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shear",
				'fr-fr': "Prospection",
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck. If any of those cards are Fighting Energy cards, attach them to this Pokémon.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fighting, attachez-les à ce Pokémon.",
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
				'en-us': "Rock Bullet",
				'fr-fr': "Fronde",
			},
			effect: {
				'en-us': "Does 20 more damage for each Fighting Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The solar energy absorbed by its body's orange crystals is magnified internally and fired from its mouth.",
	},

	thirdParty: {
		cardmarket: 280018,
		tcgplayer: 85705
	}
}

export default card
