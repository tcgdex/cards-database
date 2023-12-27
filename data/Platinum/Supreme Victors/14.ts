import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		de: "Yanmega"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
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
				de: "Temposchub"
			},
			effect: {
				en: "Once during your turn (before your attack), if Yanmega is your Active Pokémon, you may search your discard pile for a Grass Energy card and attach it to Yanmega. This power can't be used if Yanmega is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Yanmega est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Grass et l'attacher à Yanmega. Ce pouvoir ne peut pas être utilisé si Yanmega est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Yanmega dein Aktives Pokémon ist, deinen Ablagestapel nach 1 -Energiekarte durchsuchen und sie an Yanmega anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Yanmega von einem Speziellen Zustand betroffen ist."
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
				de: "Umkehrwind"
			},
			effect: {
				en: "You may return all Grass Energy attached to Yanmega to your hand. If you do, this attack does 20 damage plus 20 more damage for each Energy card you returned.",
				fr: "Vous pouvez reprendre dans votre main toutes les Énergies Grass attachées à Yanmega. Cette attaque inflige alors 20 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie reprise.",
				de: "Du kannst alle an Yanmega angelegten -Energien zurück auf deine Hand nehmen. Wenn du das machst, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise auf die Hand genommene Energiekarte zu."
			},
			damage: "20+",

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
				de: "Tempohechtsprung"
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
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
