import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'de-de': "Ampharos"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 100,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Connect",
				'fr-fr': "Connexion d'énergie",
				'de-de': "Energieverknüpfung"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may take a basic Energy card attached to 1 of your Benched Pokémon and attach it to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
				'fr-fr': "Aussi souvent que vous le désirez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie de base attachée à l'un des Pokémon de votre Banc et l'attacher à votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Pharamp est affecté par un État spécial.",
				'de-de': "Du darft in deinem Zug so oft, wie du willst (vor deinem Angriff), eine Basis-Energiekarte, die an 1 deiner Pokémon auf der Bank angelegt ist, nehmen und an dein Aktives Pokémon anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Ampharos von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap'éclair",
				'de-de': "Blitzschlag"
			},

			effect: {
				'en-us': "You may discard all Lightning Energy cards attached to Ampharos. If you do, this attack's base damage is 80 instead of 40.",
				'fr-fr': "Vous pouvez vous défausser de toutes les cartes Énergie  attachées à Pharamp. Si vous faites ainsi, cette attaque inflige 80 dégâts de base au lieu de 40.",
				'de-de': "Du kannst alle -Energiekarten, die an Ampharos angelegt sind, auf deinen Ablagestapel legen. Falls du dies tust, ist der Basisschaden dieses Angriffs 80 anstatt 40."
			},

			damage: 40,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83538,
				cardmarket: 274877
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83538,
				cardmarket: 274877
			},
		},
	],
}

export default card
