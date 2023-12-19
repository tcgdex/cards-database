import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		de: "Piondragi"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 130,
	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Tri-Poison",
				fr: "Tri-poison",
				de: "Tri-Poison"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Drapion is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Il est maintenant Empoisonné. Placez 3 marqueurs de dégât au lieu d'1 sur ce Pokémon entre deux tours. Ce pouvoir ne peut pas être utilisé si Drascore est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Drapion if affected by a Special Condition."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sniping Tail",
				fr: "Queue-sniper",
				de: "Sniping Tail"
			},
			effect: {
				en: "Does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
