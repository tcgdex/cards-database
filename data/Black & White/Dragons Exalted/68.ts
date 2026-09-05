import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Squeeze",
				fr: "Compression",
				de: "Quetschen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt paralysiert."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Superpower",
				fr: "Surpuissance",
				de: "Kraftkoloss"
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				de: "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When they encounter foes bigger than themselves, they try to throw them. They always travel in packs of five.",
		de: "Hat von Natur aus den Drang, Gegner zu werfen, die größer sind als es selbst. Es bildet stets Fünferrudel."
	},

	thirdParty: {
		cardmarket: 280507,
		tcgplayer: 89901
	}
}

export default card
