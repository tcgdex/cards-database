import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Pidgeot δ",
		fr: "Roucarnage δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 100,
	types: [
		"Lightning",
		"Metal",
	],
	evolveFrom: {
		en: "Pidgeotto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Reserve",
				fr: "Réserve Delta"
			},
			effect: {
				en: "As long as Pidgeot has any Holon Energy cards attached to it, each player's Pokémon (excluding Pokémon that has δ on its card) can't use any Poké-Powers.",
				fr: "Tant que Roucarnage possède des cartes Énergie Holon, les Pokémon de chaque joueur (Pokémon possédant le symbole δ exclus) ne peuvent pas utiliser de Poké-Powers."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rotating Claws",
				fr: "Griffes tournantes"
			},
			effect: {
				en: "You may discard an Energy card attached to Pidgeot. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Pidgeot.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Roucarnage. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Roucarnage."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
