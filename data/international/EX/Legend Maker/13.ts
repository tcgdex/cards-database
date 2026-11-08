import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'de-de': "Sarzenia"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Nectar Pod",
				'fr-fr': "Poche de nectar",
				'de-de': "Nektarschote"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Stage 2 Evolved Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Victreebel is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez échanger 1 des Pokémon Évolués de niveau 2 sur le Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Ce pouvoir ne peut pas être utilisé si Empiflor est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 entwickeltes Pokémon der Phase 2 auf der Bank deines Gegners mit 1 der Verteidigenden Pokémon austauschen. Dein Gegner wählt das Pokémon aus, das ausgetauscht wird. Diese Poké-Power kann nicht eingesetzt werden, wenn Sarzenia von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison dodo",
				'de-de': "Schlafgift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet und schläft."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Leaf",
				'fr-fr': "Feuille tranchante",
				'de-de': "Scharfes Blatt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276890,
		tcgplayer: 90363
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
