import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Aroma",
				fr: "Arôme réactive"
			},
			effect: {
				en: "As long as Roselia has any React Energy cards attached to it, remove 1 damage counter from each of your Pokémon (excluding Pokémon-ex) that has any React Energy cards attached to it between turns. You can't use more than 1 Reactive Aroma Poké-Body each turn.",
				fr: "Tant que Roselia possède des cartes Énergie réaction, retirez 1 marqueur de dégât à chacun de vos Pokémon (Pokémon-ex exclus) possédant des cartes Énergie réaction, entre deux tours. Vous ne pouvez pas utiliser plus d'1 Poké-Body Arôme réactive par tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flick Poison",
				fr: "Pichenette de poison"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Poisoned.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Empoisonné."
			},

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
