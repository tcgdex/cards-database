import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Sharpedo ex",
		fr: "Sharpedo ex"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Carvanha",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne"
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige alors 20 dégâts au nouveau Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Blast",
				fr: "Explosion d'obscurité"
			},
			effect: {
				en: "You may discard a Darkness Energy attached to Sharpedo ex. If you do, this attack does 60 damage plus 20 more damage and discard 1 Energy card attached to the Defending Pokémon.",
				fr: "Vous pouvez défausser une Énergie  attachée à Sharpedo ex. Cette attaque inflige alors 60 dégâts plus 20 dégâts supplémentaires. Défaussez une carte Énergie attachée au Pokémon Défenseur."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
