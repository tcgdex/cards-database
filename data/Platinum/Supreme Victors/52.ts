import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hover Hit",
				fr: "Coup de voltige",
				de: "Schwebetreffer"
			},
			effect: {
				en: "The Retreat Cost for the Defending Pokémon is 0 until the end of your next turn.",
				fr: "Le Coût de retraite du Pokémon Défenseur est de 0 jusqu'à la fin de votre prochain tour.",
				de: "Das Verteidigende Pokémon hat Rückzugskosten 0 bis zum Ende deines nächsten Zuges."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crash Bomber",
				fr: "Bombardier écrasant",
				de: "Trümmerbombe"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 20 damage plus 40 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie spéciales, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Ensuite, défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
				de: "Wenn am Verteidigenden Pokémon mindestens 1 Spezialenergiekarte angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu. Danach entferne 1 Spezialenergiekarte vom Verteidigenden Pokémon und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278743
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
