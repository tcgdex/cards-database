import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hidden Poison",
				fr: "Poison caché",
			},
			effect: {
				en: "If Roserade is your Active Pokémon and is damaged by an opponent's attack (even if Roserade is Knocked Out), the Defending Pokémon is now Poisoned.",
				fr: "Si Roserade est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Roserade est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
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
				en: "Bowed Whip",
				fr: "Fouet courbé",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, discard an Energy card attached to that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Deep Poison",
				fr: "Poison profond",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
