import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Cloyster δ",
		fr: "Crustabri δ",
		de: "Austos"
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
		fr: "Kokiyas"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Solid Shell",
				fr: "Coquille solide",
				de: "Feste Schale"
			},
			effect: {
				en: "Prevent all of effects of attacks, including damage, done by your opponent's Pokémon to each of your Benched Pokémon that has δ on its card.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés par les Pokémon de votre adversaire à chacun de vos Pokémon de Banc possédant le symbole δ.",
				de: "Verhindere alle Effekte von Angriffen inklusiver Schaden, der den Pokémon auf deiner Bank, auf denen δ zu sehen ist, von gegnerischen Pokémon zugefügt werden."
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
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Cloyster.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Crustabri.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Austos angelegte Energie zu."
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


	retreat: 1,

	thirdParty: {
		cardmarket: 277219
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
