import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Circulation",
				fr: "Circulation de puissance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre. Placez alors 2 marqueurs de dégât sur Delcatty. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Heal",
				fr: "Pouvoir guérissant",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Delcatty. Ensuite, retirez à Delcatty 2 marqueurs de dégât.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Pouvoir guérisseur",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
