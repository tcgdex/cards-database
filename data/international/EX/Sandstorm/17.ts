import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'de-de': "Entoron"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Chaos Flash",
				'fr-fr': "Flash chaotique",
				'de-de': "Chaos Flash"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Golduck is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Akwakwak est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur (choisissez en un s'il y en a deux) est maintenant Confus. Ce pouvoir ne peut pas être utilisé si Akwakwak est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if Golduck is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				'en-us': "Special Blow",
				'fr-fr': "Coup spécial",
				'de-de': "Special Blow"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède une ou plusieurs cartes Énergie Spéciales, cette attaque inflige 70 dégâts.",
				'de-de': "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 85810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 85810
			}
		},
	],

}

export default card
