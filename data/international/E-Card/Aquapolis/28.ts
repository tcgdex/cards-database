import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [233],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Backup",
				'fr-fr': "Sauvegarde",
				'de-de': "Unterstützung"
			},
			effect: {
				'en-us': "Once during each of your turns (before your attack), if you have 2 or fewer cards in your hand, you may draw cards from your deck until you have 3 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant chacun de vos tours (avant votre attaque), si vous avez au maximum 2 cartes dans votre main, vous pouvez piocher des cartes de votre deck jusqu'à ce que vous ayez 3 cartes dans votre main. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 2 oder weniger Karten auf deiner Hand hast, so viele Karten von deinem Deck ziehen, bis du 3 Karten auf deiner Hand hast. Diese Fähigkeit kann nicht verwendet werden, falls Porygon2 von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypnotic Ray",
				'fr-fr': "Onde hypnotique",
				'de-de': "Hypnotischer Strahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 88323,
				cardmarket: 275100
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88323,
				cardmarket: 275100
			}
		},
	]
}

export default card
