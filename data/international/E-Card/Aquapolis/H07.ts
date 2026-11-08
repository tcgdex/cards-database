import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Super Dynamo",
				'fr-fr': "Super dynamo",
				'de-de': "Super Dynamo"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokémon. This power can't be used if Electrode is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Électrode est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, attachez une carte Énergie  de votre pile de défausse sur un de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Électrode est affecté par un État spécial.",
				'de-de': "Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a  Energy card from your discard pile and attach it to 1 of your Pokémon. This power can't be used if Electrode is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Swift"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85147,
				cardmarket: 275080
			}
		},
	]
}

export default card
