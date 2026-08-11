import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [73],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Strange Tentacles",
				'fr-fr': "Tentacules étranges",
				'de-de': "Strange Tentacles"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokémon. This power can't be used if Tentacruel is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), tant que le nombre de cartes Énergie attachées au Pokémon Défenseur est inférieur au nombre de cartes Énergie attachées à votre Pokémon Actif, vous pouvez choisir une carte Énergie dans la pile de défausse de votre adversaire, s'il en a, et l'attacher au Pokémon Défenseur. Ce pouvoir ne peut pas être utilisé si Tentacruel est affecté par un État spécial.",
				'de-de': "Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent's discard pile and attach it to the Defending Pokémon. This power can't be used if Tentacruel is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],

			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Gaz toxik",
				'de-de': "Poison Sting"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89871,
				cardmarket: 275110
			}
		},
	],
	retreat: 0
}

export default card
