import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				de: "Eissturm"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats Glace",
				de: "Eissplitter"
			},
			effect: {
				en: "If the Defending Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein {F}-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
		de: "Es fängt seine Beute mit Ketten, die sich aus Eiskristallen zusammensetzen. Entstanden ist es aus einer Schneewolke."
	},

	thirdParty: {
		cardmarket: 280155,
		tcgplayer: 84512
	}
}

export default card
