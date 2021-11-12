import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Binding Aura",
				fr: "Aura enveloppante"
			},
			effect: {
				en: "Your opponent can't play any Basic Pokémon or Evolution cards from his or her hand to evolve an Asleep Pokémon and can't attach any Energy cards from his or her hand to an Asleep Pokémon.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de base ou de cartes Évolution de sa main pour faire évoluer un Pokémon Endormi et ne peut pas attacher de cartes Énergie de sa main à un Pokémon Endormi."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Asleep.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre psy"
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





}

export default card
