import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [P]",
		fr: "Zarbi P",
		de: "Icognito P"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
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
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	abilities: [{
		name: {
			fr: "[Perform]",
			de: "Perform"
		},

		effect: {
			fr: "Si une attaque a infligé des dégâts à Zarbi [P] pendant le dernier tour de votre adversaire et si Zarbi [P] était votre Pokémon Actif, l'attaque Puissance cachée de Zarbi [P] inflige le même nombre de dégâts supplémentaires au Pokémon Défenseur. Ce pouvoir fonctionne même si Zarbi (P] est Confus.",
			de: "Wenn ein Angriff im letzten Zug deines Gegners Icognito P Schaden zugefügt hat und icognito P dein Aktives Pokémon war, fügt Icognito Ps Angriff Kraftreserve dem verteidigenden Pokémon entsprechend viel zusätzlichen Schaden zu. Diese Power kann selbst dann verwendet werden, wenn Icognito P verwirrt ist."
		},

		type: "Pokemon Power"
	}],

	thirdParty: {
		cardmarket: 274710,
		tcgplayer: 90227
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
