import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [680],

	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Double Slash",
				fr: "Double Lame",
				es: "Cuchillada Doble",
				it: "Doppia Lacerazione",
				pt: "Talho Duplo",
				de: "Doppelschlitzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Honedge evolves into twins. The two blades rub together to emit a metallic sound that unnerves opponents."
	},

	thirdParty: {
		cardmarket: 458068
	}
}

export default card
