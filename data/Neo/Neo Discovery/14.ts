import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [A]",
		fr: "Zarbi A",
		de: "Icognito A"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Anger",
				fr: "[Anger]",
				de: "Anger"
			},
			effect: {
				en: "Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown A. If you have more than 1 Unown A in play, use only 1 Anger for each attack.",
				fr: "Quand 1 de vos Pokémon Zarbi utilise son attaque Puissance cachée, cette attaque inflige 10 dégâts supplémentaires par marqueur de dégâts placé sur Zarbi [A]. Si vous avez plus d' 1 Zarbi [A] en jeu, n'utilisez que 1 [Anger] par attaque.",
				de: "Immer wenn eines deiner Pokémon, das Icognito in seinem Namen hat, seinen Angriff Kraftreserve verwednet, fügt dieser Angriff pro Schadensmarke auf Icognito A 10 weitere Schadenspunkte zu. Wenn du mehr Icognito A im Spiel hast, kannst du nur einmal Anger bei jedem Angriff verwenden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	thirdParty: {
		cardmarket: 274525,
		tcgplayer: 90196
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
