import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Magikarp.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Magicarpe.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Karpador zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-rage",
				de: "Drachenwut"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez une pile, cette attaque est sans effet.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen 'Zahl' gezeigt haben, hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		fr: "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure."
	},

	thirdParty: {
		cardmarket: 277718,
		tcgplayer: 87029
	}
}

export default card
