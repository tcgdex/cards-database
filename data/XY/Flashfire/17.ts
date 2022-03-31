import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		662,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-Feu",
				es: "Aliento de Fuego",
				it: "Fuocospiro",
				pt: "Hálito de Fogo",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
