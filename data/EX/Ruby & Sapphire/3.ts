import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik",
				de: "Firestarter"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une Carte Énergie  de votre pile de défausse à un des Pokémon de votre Banc. Ce pouvoir ne peut être utilisé si Brasegali est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may attach a  Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				fr: "Courant de feu",
				de: "Fire Stream"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Blaziken. If you do, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser une Carte Énergie  attachée à Brasegali. Cette attaque inflige alors 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Discard a  Energy card attached to Blaziken. If you do, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 275651,
		tcgplayer: 83903
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			subtype: "no-e-reader"
		},
		{
			type: "reverse",
			subtype: "no-e-reader"
		},
		{
			type: "holo",
			stamp: ["chris-fulop"]
		}
	]
}

export default card
