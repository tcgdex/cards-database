import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Beedrill δ",
		'fr-fr': "Dardargnan δ",
		'de-de': "Bibor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 90,

	types: [
		"Grass",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Final Sting",
				'fr-fr': "Piqûre fatale",
				'de-de': "Finaler Stich"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez mettre Dardargnan K.O. Choisissez alors 1 des Pokémon Défenseurs de votre adversaire. Ce Pokémon est maintenant Paralysé et Empoisonné. Placez sur ce Pokémon 2 marqeurs de dégât au lieu d'1 entre deux tours. Ce pouvoir ne peut pas être utilisé si Dardargnan est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Bibor kampfunfähig machen. Wenn du das machst, wähle ein Pokémon deines Gegners aus. Dieses Pokémon ist jetzt gelähmt und vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf dieses Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Bibor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Grass",
				"Metal",
			],
			name: {
				'en-us': "Super Slash",
				'fr-fr': "Super entaille",
				'de-de': "Super Schlitzer"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276764
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
