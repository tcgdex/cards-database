import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		685,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sweet Veil",
				fr: "Gluco-Voile",
			},
			effect: {
				en: "Each of your Pokémon that has any Fairy Energy attached to it can’t be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
				fr: "Chacun de vos Pokémon auquel de l’Énergie Fairy est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Draining Kiss",
				fr: "Vampibaiser",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
