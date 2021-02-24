import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Sacs",
				fr: "Sacs de Poison",
			},
			effect: {
				en: "The Special Condition Poisoned is not removed when your opponent's Pokémon evolve or devolve.",
				fr: "L’État Spécial Empoisonné n’est pas retiré lorsque le Pokémon de votre adversaire évolue ou dés-évolue.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Toxic Secretion",
				fr: "Sécrétion Toxique",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
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

	retreat: 4,



}

export default card
