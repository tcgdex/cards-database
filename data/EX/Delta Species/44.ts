import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Makuhita",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reversal Aura",
				fr: "Échange d'aura"
			},
			effect: {
				en: "As long as you have more Prize cards left than your opponent, each of Hariyama's attacks does 20 more damage to the Active Pokémon (before applying Weakness and Resistance) and damage done by the Active Pokémon to Hariyama is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tant qu'il vous reste plus de cartes Récompense que votre adversaire, chacune des attaques d'Hariyama inflige 20 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance) et les dégâts infligés à Hariyama par le Pokémon Actif sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			name: {
				en: "Slap Push",
				fr: "Gifle"
			},

			damage: 30,
			cost: ["Colorless", "Colorless"]
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Smash",
				fr: "Casse-Brique"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 50,

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
