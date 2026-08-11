import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Rocket's Raikou ex",
		'fr-fr': "Raikou ex de Rocket",
		'de-de': "Rockets Raikou ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderous Blow",
				'fr-fr': "Coup tonitruant",
				'de-de': "Thunderderous Blow"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Lightning Energy attached to Rocket's Raikou ex.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Raikou ex de Rocket.",
				'de-de': "Does 40 damage plus 10 more damage for each  Energy attached to Rocket's Raikou ex."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			'fr-fr': "Explosion d'éclairs",
			'de-de': "Lightning Burst"
		},

		effect: {
			'fr-fr': "Lorsque vous attachez une carte Énergie  de votre main à Raikou ex de Rocket, vous pouvez choisir 1 des Pokémon Défenseurs et l'échanger avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger. Ce pouvoir ne peut pas être utilisé si Raikou ex de Rocket est affecté par un État Spécial.",
			'de-de': "Whenever you attach a  Energy card from your hand to Rocket's Raikou ex, you may choose 1 of the Defending Pokémon and Switch it with 1 of your opponent's Benched Pokémon. Your opponent choose the Benched Pokémon to switch. This power can't be used if Rocket's Raikou ex is affected by a Special Condition"
		},

		type: "Poke-POWER"
	}],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88785,
				cardmarket: 276511
			},
		},
	],

}

export default card
