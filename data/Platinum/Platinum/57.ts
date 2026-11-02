import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sludge Cell",
				fr: "Celllule vaseuse",
				de: "Schlammbecken"
			},
			effect: {
				en: "If Muk remains affected by any Special Conditions between turns, remove 2 damage counters from Muk.",
				fr: "Au début du tour de chaque joueur, si Grotadmorv est affecté par un État Spécial, retirez-lui 2 marqueurs de dégât.",
				de: "Wenn Sleimok zwischen den Zügen von einem Speziellen Zustand betroffen bleibt, entferne 2 Schadensmarken von Sleimok."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strange Poison",
				fr: "Poison étrange",
				de: "Seltsames Gift"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, Grotadmorv est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt vergiftet. Bei „Zahl“ ist Sleimok jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strange Sludge",
				fr: "Vase étrange",
				de: "Seltsamer Schlamm"
			},
			effect: {
				en: "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Si Grotadmorv est Empoisonné, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn Sleimok vergiftet ist, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87624,
				cardmarket: 278478
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278478,
				tcgplayer: 87624
			}
		}
	],

}

export default card
