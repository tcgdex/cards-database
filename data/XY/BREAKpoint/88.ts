import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Antibodies",
				fr: "Anticorps",
			},
			effect: {
				en: "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)",
				fr: "Ce Pokémon ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant ce Pokémon.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dirty Shock",
				fr: "Choc Crasseux",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Discard all Pokémon Tool cards attached to that Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Défaussez toutes les cartes Outil Pokémon attachées au Pokémon ciblé.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
