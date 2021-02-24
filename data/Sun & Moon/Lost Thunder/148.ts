import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		756,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Effect Spore",
				fr: "Pose Spore",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Asleep.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Endormi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Dream's Touch",
				fr: "Contact Onirique",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Asleep, your opponent shuffles all Energy from it into their deck.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, votre adversaire mélange toute l’Énergie qui lui est attachée avec son deck.",
			},
			damage: 50,

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
