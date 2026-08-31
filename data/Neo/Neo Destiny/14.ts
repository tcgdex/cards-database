import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dragonite",
		fr: "Dracolosse lumineux",
		de: "Helles Dragoran"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco lumineux",
		de: "Dragonir"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Miraculous Wind",
				fr: "Vent miraculeux",
				de: "Wundersamer Wind"
			},
			effect: {
				en: "As long as Light Dragonite is your Active Pokémon, each Special Energy card provides Colorless Energy instead of its usual type and its other effects stop working. This power stops working while Light Dragonite is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Dracolosse lumineux est votre Pokémon Actif, toutes les cartes Énergie spéciale fournissent de l'Énergie {C} au lieu de leur type d'Énergie habituel et leurs autres effets cessent de fonctionner. Ce pouvoir cesse de fonctionner si Dracolosse lumineux est Endormi, Confus ou Paralysé.",
				de: "Solange Helles Dragoran dein aktives Pokémon ist, erzeugt jede Spezialenergiekarte {C}-Energie statt ihres normalen Typs, und alle ihre anderen Effekte funktionieren nicht. Diese Fähigkeit verliert ihre Wirkung, solange Helles Dragoran schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Wave",
				fr: "Vague lumineuse",
				de: "Leichte Wellen"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks that are not damage done to this Pokémon.",
				fr: "Prévenez tous les effets d'attaques, excepté les dégâts, infligés lors d'attaques contre Dracolosse lumineux pendant le prochain tour de votre adversaire.",
				de: "Verhindere alle Auswirkungen von Angriffen (außer Schaden), der Helles Dragoran während des nächsten Zuges deines Gegners zugefügt wird."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "It is said to fly constantly over the sea, looking for people in need of aid.",
		fr: "On raconte qu'il vole constamment au-dessus des mers, à la recherche de personnes ayant besoin d'aide.",
		de: "Man sagt ihm nach, ständig über die Meere zu fliegen und nach Leuten in Not Ausschau zu halten."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274666,
				tcgplayer: 86738
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274666,
				tcgplayer: 86738
			}
		}
	]
}

export default card
