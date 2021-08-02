import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Évolution Δ",
				en: "Δ Evolution"
			},
			effect: {
				fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
				en: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Evolution Jammer",
				fr: "Bloqueur d'Évolution",
			},
			effect: {
				en: "Your opponent can’t play any Pokémon from his or her hand to evolve his or her Pokémon during his or her next turn.",
				fr: "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon pendant son prochain tour.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Curse Deeply",
				fr: "Malédiction Intense",
			},
			effect: {
				en: "Put 5 damage counters on your opponent’s Active Pokémon.",
				fr: "Placez 5 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
