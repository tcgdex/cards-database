import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		de: "Tengulist"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fan Away",
				fr: "Faire de l'air",
				de: "Fan Away"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, votre adversaire reprend dans sa main une carte Énergie attachée au Pokémon Défenseur. Ce pouvoir ne peut pas être utilisé si Tengalice est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Touch Throw",
				fr: "Lancer léger",
				de: "Light Touch Throw"
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 80 dégâts moins 10 dégâts pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon."
			},
			damage: "80-",

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
		cardmarket: 275789,
		tcgplayer: 89152
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
