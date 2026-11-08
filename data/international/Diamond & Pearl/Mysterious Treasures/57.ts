import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crash Bomber",
				'fr-fr': "Bombardier écrasant",
				'de-de': "Trümmerbombe"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 30 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur possède des cartes Énergie Spéciale, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur.",
				'de-de': "Wenn am Verteidigenden Pokémon mindestens 1 Spezialenergiekarte angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Danach wähle 1 am Verteidigenden Pokémon angelegte Spezialenergiekarte und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Liner",
				'fr-fr': "Aqua-paquebot",
				'de-de': "Wasserrohr"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It lives in the gaps of boulders and in holes on the seafloor. Its suction cups grip prey tightly.",
		'fr-fr': "Il hante les fissures dans la roche et les trous au fond de la mer. Ses ventouses ne lâchent jamais prise."
	},

	thirdParty: {
		cardmarket: 277686,
		tcgplayer: 87832
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
