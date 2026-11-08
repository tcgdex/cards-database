import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Vileplume δ",
		'fr-fr': "Rafflesia δ",
		'de-de': "Giflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 90,

	types: [
		"Psychic",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Poison Pollen",
				'fr-fr': "Pollen toxik",
				'de-de': "Gift-Pollen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Rafflesia est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) wirf 1 Münze. Bei \"Kopf\" wähle 1 Verteidigendes Pokémon. Dieses Pokémon ist jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Giflor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer card in your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Dresseur dans la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Trainerkarte auf der Hand deines Gegners zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276987
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
