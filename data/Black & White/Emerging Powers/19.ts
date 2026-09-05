import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
		de: "Grillmak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water's Power",
				fr: "Pouvoir Submergeant",
				de: "Wassermacht"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, the Defending Pokémon is now Asleep.",
				fr: "Si de l'Énergie Water est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wenn an dieses Pokémon bereits {W}-Energie angelegt ist, schläft das Verteidigende Pokémon jetzt."
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
				en: "Flamethrower",
				fr: "Lance-Flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
		de: "Es entfacht in seinem Körper ein Feuer und verkohlt Gegner mit Funken aus seinem Kopf und Schweif."
	},

	thirdParty: {
		cardmarket: 279984,
		tcgplayer: 89226
	}
}

export default card
