import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ion Coating",
				fr: "Couche ionique",
				de: "Ion Coating"
			},
			effect: {
				en: "You may use this power once during each of your turn (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of your turn. (This effect ends if your Active Pokémon retreats or is returned to your hand). This power can't be used if Lanturn is affected by a Special Condition.",
				fr: "Vous pouvez utiliser ce pouvoir une seule fois pendant chacun de vos tours (avant votre attaque). Toutes les Énergies  attachées à votre Pokémon Actif deviennent de l'Énergie  pour le reste de votre tour. (Cet effet cesse si votre Pokémon Actif bat en retraite ou s'il revient dans votre main.) Ce pouvoir ne peut pas être utilisé si Lanturn est affecté par un État spécial.",
				de: "You may use this power once during each of your turns (before your attack). All  Energy attached to your Active Pokémon becomes  Energy for the rest of the turn. (This effect ends of your Active Pokémon retreats or is returned to your hand.) This power can't be used if Lanturn is affected by a Special Condition."
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
				en: "Electric Tackle",
				fr: "Plaquage électrik",
				de: "Electric Tackle"
			},
			effect: {
				en: "This attack does 20 damage plus 10 more damage for each Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Energy attached to it.",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts pour chaque énergie  attachée à Lanturn. Lancez une pièce. Si c'est pile, Lanturn s'inflige 10 dégâts pour chaque Énergie  qui lui est attachée.",
				de: "This attack does 20 damage plus 10 more damage for each  Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each  Energy attached to it."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275055,
		tcgplayer: 86599
	}
}

export default card
