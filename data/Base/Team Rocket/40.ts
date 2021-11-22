import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Machoke",
		fr: "Machopeur obscur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne"
			},
			effect: {
				en: "Before doing damage, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. Do the damage to the new Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
				fr: "Avant d'appliquer les dégâts, choisissez 1 Pokémon du Banc de votre adversaire et échangez-le avec le Pokémon Défenseur. Infligez les dégâts au nouveau Pokémon Défenseur. Cette attaque ne peut pas être utilisée si votre adversaire n'a aucun Pokémon sur le Banc."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Back",
				fr: "A la tienne !"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a au moins 1 Pokémon sur son Banc, il ou elle choisit l'un d'eux et l'échange avec le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Bien que d'un naturel paisible et amical, le nombre d'incidents mettant en cause des Machopeur cruels va grandissant."
	}
}

export default card
