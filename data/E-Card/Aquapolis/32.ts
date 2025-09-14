import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
				fr: "Résistance au poison",
				de: "Giftresistenz"
			},
			effect: {
				en: "Scizor can't be Poisoned.",
				fr: "Cizayox ne peut pas être Empoisonné.",
				de: "Scherox kann nicht vergiftet werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Snatch",
				fr: "Arrachage",
				de: "Haschen"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and snatch the Defending Pokémon with it.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir un des Pokémon du Banc de votre adversaire sans marqueurs de dégâts et l'échanger contre le Pokémon Défenseur.",
				de: "Bevor Schaden zugefügt wird, kannst du 1 Popkémon auf der Bank deines Gegners wählen, auf dem keine Schadensmarken liegen, und es mit dem Verteidigenden Pokémon austauschen."
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
				en: "Heavy Metal",
				fr: "Heavy Métal",
				de: "Schwermetall"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Metal Energy attached to Scizor. This attack does 30 damage plus 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Cizayox. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf so viele Münzen, wie -Energie an Scherox angelegt ist. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte pro geworfenem 'Kopf' zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275045,
		tcgplayer: 88959
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
