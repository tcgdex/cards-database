import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heal Block",
				fr: "Anti-Soin",
			},
			effect: {
				en: "Damage can't be healed from any Pokémon (both yours and your opponent's). (Damage counters can still be moved.)",
				fr: "Les dégâts ne peuvent être soignés pour aucun Pokémon (les vôtres et ceux de votre adversaire). (Les marqueurs de dégâts peuvent toujours être déplacés.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Oracle Inflict",
				fr: "Supplice de l'Oracle",
			},
			effect: {
				en: "Does 10 more damage for each card in your opponent's hand.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
			},
			damage: 30,

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
	retreat: 4,



}

export default card
