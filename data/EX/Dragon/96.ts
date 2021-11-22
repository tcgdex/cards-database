import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Muk ex",
		fr: "Grotadmorv ex"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Toxic Gas",
				fr: "Gaz chimique"
			},
			effect: {
				en: "As long as Muk ex is your Active Pokémon, ignore all Poké-Powers and Poké-Bodies other than Toxic Gas.",
				fr: "Tant que Grotadmorv ex est votre Pokémon Actif, ignorez tous les Poké-Powers et les Poké-Bodies autres que Puanteur."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slimy Water",
				fr: "Eau gluante"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite)."
			},
			damage: "40+",

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
