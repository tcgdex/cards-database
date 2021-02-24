import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Leafeon-GX",
		fr: "Phyllali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		470,
	],
	hp: 200,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Breath of the Leaves",
				fr: "Souffle du Feuillage",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may heal 50 damage from 1 of your Pokémon that has any Energy attached to it.",
				fr: "Si ce Pokémon est votre Pokémon Actif, une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 50 dégâts à l’un de vos Pokémon auquel de l’Énergie est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 110,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grand Bloom-GX",
				fr: "Efflorescence-GX",
			},
			effect: {
				en: "For each of your Benched Basic Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Pour chacun de vos Pokémon de Banc de base, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
