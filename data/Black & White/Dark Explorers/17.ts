import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		es: "Blaziken",
		it: "Blaziken",
		pt: "Blaziken",
		de: "Lohgock"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blaze Kick",
				fr: "Pied Brûleur",
				de: "Feuerfeger"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu. Bei „Zahl“ ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
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
			damage: 130,

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
		en: "Flames spout from its wrists, enveloping its knuckles. Its punches scorch it foes.",
		de: "Aus seinen Handgelenken kommt Feuer, das seine Knöchel umhüllt. Schläge verbrennen den Gegner."
	},

	thirdParty: {
		cardmarket: 280345,
		tcgplayer: 83911
	}
}

export default card
