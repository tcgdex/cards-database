import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'de-de': "Sumpex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [260],

	hp: 110,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Water Call",
				'fr-fr': "Appel d'eau",
				'de-de': "Wasserruf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Water Energy card from your hand to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre main à votre Pokémon Actif. Ce pouvoir ne peut être utilisé si Laggron est affecté par un État Spécial.",
				'de-de': "Während deines Zuges (vor deinem Angriff) kannst du einmal eine  -Energiekarte von deiner Hand an dein Aktives Pokémon anlegen. Diese Poké-Power kann nicht verwendet werden, falls Sumpex von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Splash",
				'fr-fr': "Hypnoplouf",
				'de-de': "Hypnospritzer"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275661,
				tcgplayer: 89675
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275661,
				tcgplayer: 89675
			}
		},
		{
			type: "normal",
			stamp: ['reed-weichler'],
			thirdParty: {
				tcgplayer: 477438
			}
		},
	],

}

export default card
