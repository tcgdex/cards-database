import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
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
				fr: "Combustion d'Énergie",
				de: "Energie verbrennen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez transformer toutes les Énergies attachées à Dracaufeu en Énergie  jusqu'à la fin du tour. Ce pouvoir ne peut être utilisé si Dracaufeu est Endormi, Confus ou Paralysé.",
				de: "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft alle auf Glurak abgelegte Energie in  Energie für den Rest des Zugs verwandeln. Diese Fähigkeit kann nicht eingesetzt werden, falls Glurak schlafend, verwirrt oder gelähmt ist."
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
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
				fr: "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
				de: "Entferne 2 auf Glurak abgelegte Energiekarten, um diesen Angriff auszuführen."
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

	retreat: 3,

	description: {
		fr: "Il peut fondre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies."
	}
}

export default card
