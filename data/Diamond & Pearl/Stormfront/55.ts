import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bronzor",
		fr: "Archéomire",
		de: "Bronzel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		436,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		fr: "Archéomire",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Gyro Swap",
				fr: "Gyro-échange",
				de: "Gyrotausch"
			},
			effect: {
				en: "Put a number of damage counters on the Defending Pokémon equal to the number of Colorless Energy in Bronzor's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Placez autant de marqueurs de dégât sur le Pokémon Défenseur qu'il y a d'Énergies Colorless dans le Coût de Retraite d'Archéomire (après avoir appliqué les effets sur le Coût de Retraite).",
				de: "Lege für jede -Energie in Bronzels Rückzugskosten (nachdem Effekte auf die Rückzugskosten verrechnet wurden) 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il rappelle les objets trouvés dans des sépultures anciennes. Nul ne sait s'ils sont liés."
	},

	thirdParty: {
		cardmarket: 278353,
		tcgplayer: 84003
	}
}

export default card
