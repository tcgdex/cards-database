import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 70,

	types: [
		"Colorless",
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
				'de-de': "Ruf nach Energie"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de votre main. Ensuite, piochez jusqu'à 3 cartes de votre deck. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
				'de-de': "Während deines Zuges (vor deinem Angriff) kannst du einmal 1 Energiekarte von deiner Hand abwerfen. Ziehe danach bis zu 3 Karten von deinem Deck. Diese Poké-Power kann nicht angewendet werden, falls Enekoro von einem Speziellen Zustand betroffen ist."
			},
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
				'de-de': "Maximale Energie"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon Actifs.",
				'de-de': "Dieser Angriff fügt für jede Energie, die an allen deinen Aktiven Pokémon angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277314,
		tcgplayer: 84739
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card
