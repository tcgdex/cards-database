import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Meganium",
		'fr-fr': "Meganium",
		'de-de': "Meganie"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ultra Powder",
				'fr-fr': "Poudre ultra",
				'de-de': "Ultrapuder"
			},
			effect: {
				'en-us': "Flip 3 coins. If the first coin is heads, the Defending Pokémon is now Poisoned. If the second coin is heads, the Defending Pokémon is now Burned. If the third coin is heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 3 pièces. Si la première pièce est face, le Pokémon Défenseur est maintenant Empoisonné. Si la deuxième pièce est face, le Pokémon Défenseur est maintenant Brûlé. Si la troisième pièce est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 3 Münzen. Wenn der erste Wurf \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt vergiftet. Wenn der zweite Wurf \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt verbrannt. Wenn der dritte Wurf \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Fire Counterattack",
				'fr-fr': "Contre-attaque de feu",
				'de-de': "Feuerkonter"
			},
			effect: {
				'en-us': "If your opponent has any Fire Pokémon in play, this attack does 60 damage plus 30 more damage.",
				'fr-fr': "Si votre adversaire possède des Pokémon Fire en jeu, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 60 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its breath has the fantastic ability to revive dead plants and flowers.",
		'fr-fr': "Son souffle a l'incroyable capacité de ranimer les plantes et les fleurs flétries."
	},

	thirdParty: {
		cardmarket: 277642,
		tcgplayer: 87292
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
