import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		it: "Haunter",
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
		fr: "Fantominus",
		it: "Gastly",
		de: "Nebulak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Transparency",
				fr: "Transparence",
				it: "Trasparenza",
				de: "Durchschaubarkeit"
			},
			effect: {
				en: "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
				fr: "À chaque fois qu'une attaque affecte Spectrum, lancez une pièce. Si c'est face, prévenez tous les effets de cette attaque, y compris les dégâts, infligés à Spectrum. L'effet de ce pouvoir cesse lorsque Spectrum est Endormi, Confus ou Paralysé.",
				it: "Ogni volta che un attacco fa qualcosa ad Haunter, lancia una moneta. Se esce testa, previeni tutti gli effetti di quell'attacco inflitti ad Hanuter, incluso il danno. Questo potere non funziona quando Haunter è Addormentato, Confuso o Paralizzato.",
				de: "Immer wenn Alpollo angegriffen wird, kannst du eine Münze werfen. Bei „Kopf“ verhindere alle Auswirkungen dieses Angriffs auf Alpollo (einschließlich der Schadenspunkte). Diese Fähigkeit verliert ihre Wirkung, solange Alpollo schläft, verwirrt oder gelähmt ist."
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
				it: "Incubo",
				de: "Alptraum"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				it: "Il Pokémon Difensore è Addormentato.",
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
		en: "Because of its ability to slip through block walls, it is said to be from another dimension.",
		fr: "Il peut se glisser à travers les murs comme une créature d'une autre dimension.",
		it: "A causa della sua capacità di passare attraverso i muri, si suppone che provenga da un'altra dimensione.",
		de: "Aufgrund seiner Fähigkeit, durch Wände zu gleiten, sagt man ihm nach, dass es aus einer anderen Dimension stammt."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273867,
				tcgplayer: 106522
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273867,
				tcgplayer: 106522
			}
		},
	],
}

export default card
