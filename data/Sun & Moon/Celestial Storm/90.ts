import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Scizor-GX",
		fr: "Cizayox-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 210,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Danger Perception",
				fr: "Perception du Danger",
			},
			effect: {
				en: "If this Pokémon's remaining HP is 100 or less, its attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "S’il reste 100 PV ou moins à ce Pokémon, ses attaques infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d’Acier",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut-GX",
				fr: "Coupe Transversale-GX",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
