import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Transparency",
				fr: "Transparence",
				de: "Durchschaubarkeit"
			},
			effect: {
				en: "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
				fr: "À chaque fois qu'une attaque affecte Spectrum, lancez une pièce. Si c'est face, prévenez tous les effets de cette attaque, y compris les dégâts, infligés à Spectrum. L'effet de ce pouvoir cesse lorsque Spectrum est Endormi, Confus ou Paralysé.",
				de: "Immer wenn Alpollo angegriffen wird, kannst du eine Münze werfen. Bei 'Kopf' verhindere alle Auswirkungen dieses Angriffs auf Alpollo (einschließlich der Schadenspunkte). Diese Fähigkeit verliert ihre Wirkung, solange Alpollo schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				de: "Alptraum"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il peut se glisser à travers les murs comme une créature d'une autre dimension."
	},

	thirdParty: {
		cardmarket: 273867,
		tcgplayer: 44429
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
