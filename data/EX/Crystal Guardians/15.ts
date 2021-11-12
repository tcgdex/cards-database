import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Cacturne δ",
		fr: "Cacturne δ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cacnea",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Spike Storm",
				fr: "Pluie transperçante"
			},
			effect: {
				en: "Once during your turn (before your attack), if Cacturne is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon that already has any damage counters on it. This power can't be used if Cacturne is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cacturne est votre Pokémon Actif, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de votre adversaire possédant déjà des marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Cacturne est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Triple Needle",
				fr: "Triple aiguille"
			},
			effect: {
				en: "Choose 3 of your opponent's Pokémon. This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 3 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
