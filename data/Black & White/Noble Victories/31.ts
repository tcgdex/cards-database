import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		593,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Body",
				fr: "Corps Maudit",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "Does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
