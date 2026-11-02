import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de Feu",
				es: "Puño Fuego",
				it: "Fuocopugno",
				pt: "Soco de Fogo",
				de: "Feuerschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Descarta 1 Energía Fire unida a este Pokémon.",
				it: "Scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Fire ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte {R}-Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Found near the mouth of a volcano. This fire-breather's body temperature is nearly 2,200 degrees Fahrenheit.",
		de: "Es wurde in der Nähe eines Vulkans gefunden. Die Körpertemperatur dieses Feuerspuckers liegt bei fast 1200 Grad Celsius."
	},

	thirdParty: {
		cardmarket: 293376,
		tcgplayer: 124033
	}
}

export default card
