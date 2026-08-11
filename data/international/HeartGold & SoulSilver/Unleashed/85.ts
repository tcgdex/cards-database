import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'de-de': "Seedraking"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [230],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocean"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Spray Splash",
				'fr-fr': "Embruns",
				'de-de': "Fontänenspritzer"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégât sur l’un des Pokémon de votre adversaire. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke auf 1 Pokémon deines Gegners legen. Diese Poké-Power kann nicht benutzt werden, wenn Seedraking von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dragon Steam",
				'fr-fr': "Dragovapeur",
				'de-de': "Drachendampf"
			},
			effect: {
				'en-us': "If your opponent has any Fire Pokémon in play, this attack's base damage is 20 instead of 60.",
				'fr-fr': "Si votre adversaire dispose de n’importe quel Pokémon Fire en jeu, cette attaque inflige 20 dégâts de base au lieu de 60.",
				'de-de': "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, beträgt der Grundschaden dieses Angriffs 20 Schadenspunkte anstelle von 60 Schadenspunkten."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279241,
				tcgplayer: 86448
			}
		},
		{
			type: "normal",
			stamp: ["gustavo-wada"],
			thirdParty: {
				cardmarket: 868150,
				tcgplayer: 480416
			}
		},
	],
}

export default card
