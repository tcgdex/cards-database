import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

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
				en: "Quick Turn",
				fr: "Vif Retournement",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Assault",
				fr: "Assaut Psychique",
				de: "Psycho-Ansturm"
			},
			effect: {
				en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "They never vary the route they fly, because their memories of guarding an ancient city remain steadfast.",
		de: "Erinnerungen an seine Tage als Wächter einer uralten Stadt veranlassen es, Tag für Tag dieselbe Route abzufliegen."
	},

	thirdParty: {
		cardmarket: 280006,
		tcgplayer: 89205
	}
}

export default card
