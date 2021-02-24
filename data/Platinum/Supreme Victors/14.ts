import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		469,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Speed Boost",
				fr: "Turbo",
			},
			effect: {
				en: "Once during your turn (before your attack), if Yanmega is your Active Pokémon, you may search your discard pile for a Grass Energy card and attach it to Yanmega. This power can't be used if Yanmega is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Yanmega est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Grass et l'attacher à Yanmega. Ce pouvoir ne peut pas être utilisé si Yanmega est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Return",
				fr: "Retour de vent",
			},
			effect: {
				en: "You may return all Grass Energy attached to Yanmega to your hand. If you do, this attack does 20 damage plus 20 more damage for each Energy card you returned.",
				fr: "Vous pouvez reprendre dans votre main toutes les Énergies Grass attachées à Yanmega. Cette attaque inflige alors 20 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie reprise.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Équilibre Plongée",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
