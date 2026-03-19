import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoshock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en série",
				de: "Vereinigende Explosion"
			},
			effect: {
				en: "If Kirlia and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 30 instead of 60.",
				fr: "Si Kirlia et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 30 et non de 60.",
				de: "Wenn an Kirlia und dem Verteidigenden Pokémon unterschiedlich viel Energie angelegt ist, beträgt der Grundschaden dieses Angriffs 30 statt 60."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275817,
		tcgplayer: 86461
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
