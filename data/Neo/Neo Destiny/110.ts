import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Noctowl",
		fr: "Noarfang brillant",
		de: "Schimmerndes Noctuh"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Flashing Eyes",
				fr: "Yeux clignotants",
				de: "Leuchtende Augen"
			},
			effect: {
				en: "Flip 3 coins. If exactly 1 is heads, the Defending Pokémon is now Asleep. If exactly 2 are heads, the Defending Pokémon is now Confused. If all 3 are heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 3 pièces. S'il y a une face, le Pokémon Défenseur est maintenant Endormi. S'il y a 2 faces, le Pokémon Défenseur est maintenant Confus. S'il y a 3 faces, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf drei Münzen. Wenn genau einmal 'Kopf' fällt, schläft das verteidigende Pokémon jetzt. Wenn genau zweimal 'Kopf' fällt, ist das verteidigende Pokémon jetzt verwirrt. Wenn jedes Mal 'KopfÄ fällt, ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

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
			value: "-30"
		},
	],

	description: {
		fr: "Il accélère la vitesse à laquelle il pense en tournant sa tête à 180 degrés."
	},

	thirdParty: {
		cardmarket: 274762,
		tcgplayer: 89168
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
