import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Salamence ex δ",
		'fr-fr': "Drattak ex δ",
		'de-de': "Brutalanda ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Type Shift",
				'fr-fr': "Transfert de type",
				'de-de': "Typenwechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Salamence ex's type is Fire until the end of your turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Drattak ex est de type  jusqu'à la fin de votre tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power einsetzen. Brutalanda ex erhält den Typ  bis zum Ende des Zuges."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Swipe",
				'fr-fr': "Combo-serres",
				'de-de': "Klauenschlag"
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dual Stream",
				'fr-fr': "Double ruisseau",
				'de-de': "Doppelkanal"
			},
			effect: {
				'en-us': "You may do 40 damage instead of 80 to the Defending Pokémon. If you do, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez infliger au Pokémon Défenseur 40 dégâts au lieu de 80. Cette attaque inflige alors 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Du kannst dem Verteidigenden Pokémon 40 Schadenspunkte anstelle von 80 Schadenspunkten zufügen. Wenn du das machst, fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277303
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
