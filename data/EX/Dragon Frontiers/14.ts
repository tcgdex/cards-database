import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Cloyster δ",
		fr: "Crustabri δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Shellder",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Solid Shell",
				fr: "Coquille solide"
			},
			effect: {
				en: "Prevent all of effects of attacks, including damage, done by your opponent's Pokémon to each of your Benched Pokémon that has δ on its card.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés par les Pokémon de votre adversaire à chacun de vos Pokémon de Banc possédant le symbole δ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Grind",
				fr: "Écrase"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Cloyster.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Crustabri."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
