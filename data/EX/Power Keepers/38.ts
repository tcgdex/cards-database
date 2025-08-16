import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		de: "Tohaido"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Carvanha",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tight Jaw",
				fr: "Mâchoire serrée",
				de: "Fester Biss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Charge",
				fr: "Recharge obscurité",
				de: "Finstere Attacke"
			},
			effect: {
				en: "Put 1 damage counter on Sharpedo.",
				fr: "Placez 1 marqueur de dégât sur Sharpedo.",
				de: "Lege 1 Schadensmarke auf Tohaido."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 277344,
		tcgplayer: 89098
	}
}

export default card
