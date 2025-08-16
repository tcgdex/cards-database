import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Melofée",
		de: "Piepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sing",
				fr: "Berceuse",
				de: "Gesang"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact lunaire",
				de: "Mondeinschlag"
			},
			effect: {
				en: "If Clefairy is evolved from Cleffa, this attack does 20 damage plus 20 more damage.",
				fr: "Si Melofée évolue de Melo, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn Piepi sich aus Pii entwickelt hat, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Tout le monde craque pour cet adorable Pokémon. Il vit en groupe dans le calme des montagnes."
	},

	thirdParty: {
		cardmarket: 277576,
		tcgplayer: 84356
	}
}

export default card
