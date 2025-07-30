import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		de: "Bluzuk"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				de: "Blutsauger"
			},
			effect: {
				en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
				fr: "Retirez de Mimitoss un nombre de marqueurs de dégâts égal aux dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Mimitoss a moins de marqueurs de 10 dégâts, retirez-les tous.",
				de: "Entferne von Bluzuk Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon durch diesen Angriff zugefügt wurden (nachdem Schwäche und Reistenz abgerechnet wurden). Falls Bluzuk weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il vit à l'ombre des grands arbres où il mange des insectes. Il est attiré par la lumière."
	},

	thirdParty: {
		cardmarket: 273860,
		tcgplayer: 45166
	}
}

export default card
