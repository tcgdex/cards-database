import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [212],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Resistance",
				'fr-fr': "Résistance au poison",
				'de-de': "Giftresistenz"
			},
			effect: {
				'en-us': "Scizor can't be Poisoned.",
				'fr-fr': "Cizayox ne peut pas être Empoisonné.",
				'de-de': "Scherox kann nicht vergiftet werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Snatch",
				'fr-fr': "Arrachage",
				'de-de': "Haschen"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and switch the Defending Pokémon with it.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir un des Pokémon du Banc de votre adversaire sans marqueurs de dégâts et l'échanger contre le Pokémon Défenseur.",
				'de-de': "Bevor Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners wählen, auf dem keine Schadensmarken liegen, und es mit dem Verteidigenden Pokémon austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Metal",
				'fr-fr': "Heavy Métal",
				'de-de': "Schwermetall"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the amount of Metal Energy attached to Scizor. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Cizayox. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf so viele Münzen, wie -Energie an Scherox angelegt ist. Dieser Angriff fügt 30 Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88957,
				cardmarket: 275104
			}
		},
		{
			type: 'reverse',
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 180716,
			}
		},
	]
}

export default card
