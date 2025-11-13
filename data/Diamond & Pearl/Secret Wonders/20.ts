import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		de: "Bisaflor"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Aroma",
				fr: "Arôme miracle",
				de: "Wunderduft"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose either Asleep, Burned, or Poisoned. The Defending Pokémon is now affected by that Special Condition. This power can't be used if Venusaur is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est pile, choisissez Endormi, Brûlé ou Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Ce pouvoir ne peut pas être utilisé si Florizarre est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" wähle Schlaf, Verbrannt oder Vergiftet. Das Verteidigende Pokémon ist jetzt vom gewählten Speziellen Zustand betroffen. Diese Poké-Power kann nicht benutzt werden, wenn Bisaflor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
				fr: "Pousse géante",
				de: "Riesenblüte"
			},
			effect: {
				en: "Flip a coin. If heads, remove 4 damage counters from Venusaur.",
				fr: "Lancez une pièce. Si c'est pile, retirez à Florizarre 4 marqueurs de dégât.",
				de: "Wirf 1 Münze. Bei \"Kopf\" entferne 4 Schadensmarken von Bisaflor."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277773,
		tcgplayer: 90319
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
		},
	]
}

export default card
