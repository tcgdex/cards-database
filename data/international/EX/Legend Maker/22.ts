import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Reactive Recharge",
				'fr-fr': "Recharge réactive",
				'de-de': "Reaktive Aufladung"
			},
			effect: {
				'en-us': "If Magneton would be Knocked Out by damage from an opponent's attack, you may move any number of React Energy cards from Magneton to your Pokémon in any way you like.",
				'fr-fr': "Si Magneton doit être mis K.O par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer autant de cartes Énergie réaction que vous voulez de Magneton sur vos Pokémon, de la façon que vous voulez.",
				'de-de': "Wenn Magneton durch die Schadenspunkte eines gegnerischen Pokémons kampfunfähig gemacht würde, kannst du eine beliebige Anzahl von Reaktions-Energiekarten von Magneton beliebig auf deine anderen Pokémon verteilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Multiple Force",
				'fr-fr': "Forces multiples",
				'de-de': "Potenzierte Kraft"
			},
			effect: {
				'en-us': "If Magneton has any React Energy cards attached to it, this attack does 30 damage plus 10 more damage for each Magnemite and Magneton (both yours and your opponent's) in play.",
				'fr-fr': "Si Magneton possède des cartes Énergie réaction, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Magneti et Magneton en jeu (les vôtres et ceux de votre adversaire).",
				'de-de': "Wenn an Magneton mindestens eine Reaktions-Energiekarte angelegt ist, fügt dieser Angriff 30 Schadenspunkte für jedes Magnetilo und Magneton zu, das sich im Spiel befindet (deine und die deines Gegners)."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Blast",
				'fr-fr': "Explosion magnétique",
				'de-de': "Magnetstoß"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276899,
		tcgplayer: 87105
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
