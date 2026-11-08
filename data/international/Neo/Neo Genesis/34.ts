import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Discharge",
				'fr-fr': "Décharge",
				'de-de': "Discharge"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage times the number of heads.",
				'fr-fr': "Défaussez toutes les cartes Énergie  attachées à Lainergie afin de pouvoir utiliser cette attaque. Lancez un nombre de pièces égal au nombre de cartes Énergie  que vous avez défaussé. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Discard all  Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of  Energy cards you discarded. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electric Current",
				'fr-fr': "Courant électrique",
				'de-de': "Electric Current"
			},
			effect: {
				'en-us': "Take 1 Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.",
				'fr-fr': "Prenez une carte Énergie  attachée à Lainergie et attachez-la à 1 des Pokémon de votre Banc. Si vous n'avez pas de Pokémon sur votre Banc, défaussez cette carte énergie.",
				'de-de': "Take 1  Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "As a result of storing too much electricity, it developed patches where even downy wool won't grow.",
		'fr-fr': "Parce qu'il stocke trop d'électricité, il développe des plaques où sa laine ne pousse plus."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274434,
				tcgplayer: 85474
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274434,
				tcgplayer: 85474
			}
		}
	]
}

export default card
