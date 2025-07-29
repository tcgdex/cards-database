import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		de: "Flamara"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				de: "Feuerzahn"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
				de: "Anzünden"
			},
			effect: {
				en: "Discard an Energy card attached to Flareon and then discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie attachée à Pyroli et défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Entferne 1 Energiekarte, die an Flamara angelegt ist, und lege sie auf deinen Ablagestapel. Lege danach 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278068
	}
}

export default card
