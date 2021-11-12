import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Nidoqueen δ",
		fr: "Nidoqueen δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Invitation",
				fr: "Invitation"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Nidoqueen is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck un Pokémon de base ou une carte Évolution. Montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Nidoqueen est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Vengeance"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de base et chaque carte Évolution dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon."
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





}

export default card
