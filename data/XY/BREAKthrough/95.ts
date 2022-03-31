import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		436,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
				es: "Vendetta",
				it: "Rivincita",
				pt: "Revide",
				de: "Gegenstoß"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 60 more damage.",
				fr: "S'il ne reste qu'une seule carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si a tu rival solo le queda 1 carta de Premio, este ataque hace 60 puntos de daño más.",
				it: "Se al tuo avversario è rimasta una sola carta Premio, questo attacco infligge 60 danni in più.",
				pt: "Se o seu oponente tiver apenas 1 card de Prêmio restante, este ataque causará 60 de danos adicionais.",
				de: "Wenn dein Gegner nur 1 Preiskarte übrig hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
