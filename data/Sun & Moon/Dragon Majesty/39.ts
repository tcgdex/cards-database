import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dragon Guard",
				fr: "Garde des Dragons",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to your Dragon Pokémon. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à vos Pokémon Dragon. (Les effets déjà en action ne sont pas retirés.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
