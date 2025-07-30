import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
		es: "Chesnaught",
		it: "Chesnaught",
		pt: "Chesnaught",
		de: "Brigaron"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Quilladin",
		fr: "Boguérisse",
		es: "Quilladin",
		it: "Quilladin",
		pt: "Quilladin",
		de: "Igastarnish"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle Arm",
				fr: "Poing Dard",
				es: "Brazo Pincho",
				it: "Pugnospine",
				pt: "Braço de Agulha",
				de: "Nietenranke"
			},

			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque Trébuchante",
				es: "Ataque Tambaleante",
				it: "Attacco Capriola",
				pt: "Ataque Cambalhota",
				de: "Taumler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281271
	}
}

export default card
