import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'de-de': "Lepumentas"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Psychic Trace",
				'fr-fr': "Psycho-trace",
				'de-de': "Psychic Trace"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Claydol is your Active Pokémon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Kaorine est votre Pokémon Actif, vous pouvez mélanger votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Kaorine est affecté par un État Spécial.",
				'de-de': "Once during your turn (bafore your attack), if Claydol is your Active Pokémon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol if affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ancient Mantra",
				'fr-fr': "Litanie ancestrale",
				'de-de': "Ancient Mantra"
			},
			effect: {
				'en-us': "If Claydol has any Psychic Energy attached to it, the Defending Pokémon is now Confused. If Claydol has any Fighting Energy attached to it, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si Kaorine possède des Énergies , le Pokémon Défenseur est maintenant Confus. Si Kaorine possède des Énergies , cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If Claydol has any  Energy attached to it, the Defending Pokémon is now Confused. if Claydol has any  Energy attached to it, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84334,
				cardmarket: 276408
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84334,
				cardmarket: 276408
			},
		},
	],

}

export default card
