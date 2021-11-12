import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Burn",
				fr: "Combustion d'Énergie"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez transformer toutes les Énergies attachées à Dracaufeu en Énergie  jusqu'à la fin du tour. Ce pouvoir ne peut être utilisé si Dracaufeu est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
				fr: "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il peut fondre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies."
	}
}

export default card
