import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		de: "Dragoran"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Calming Wind",
				fr: "Vent apaisant",
				de: "Beruhigender Wind"
			},
			effect: {
				en: "Remove all Special Conditions from Dragonite.",
				fr: "Retirez tous les États Spéciaux à Dracolosse.",
				de: "Entferne alle Speziellen Zustände von Dragoran."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Stamp",
				fr: "Dragofrappe",
				de: "Drachenstampfer"
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing. If both of them are heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Si vous obtenez deux fois face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 2 Münzen. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Wenn beide Münzen \"Kopf\" zeigen, ist das Verteidigende Pokémon jezt gelähmt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		en: "This marine Pokémon has an impressive build that lets it freely fly over raging seas without trouble."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279548
	}
}

export default card
