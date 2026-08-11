import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [301],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Draw",
				'fr-fr': "Pioche d'énergie",
				'de-de': "Energy Draw"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de votre main. Ensuite, vous pouvez piocher jusqu'à trois cartes dans votre deck. Ce pouvoir ne peut être utilisé si Delcatty est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), your may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Max Energy Source",
				'fr-fr': "Source d'énergie maximale",
				'de-de': "Max Energy Source"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
				'fr-fr': "Inflige 10 dégâts pour chaque Énergie attachée à vos Pokémon Actifs.",
				'de-de': "Does 10 damage times the amount of Energy attached to all of your Active Pokémon."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275653,
				tcgplayer: 84734
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275653,
				tcgplayer: 84734
			}
		},
		{
			type: "normal",
			stamp: ['kevin-nguyen'],
			thirdParty: {
				tcgplayer: 477377
			}
		},
		{
			type: "normal",
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477375
			}
		},
		{
			type: "normal",
			stamp: ['reed-weichler'],
			thirdParty: {
				tcgplayer: 477376
			}
		},
	],

}

export default card
