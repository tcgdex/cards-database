import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				es: "Emboscada",
				it: "Imboscata",
				pt: "Emboscada",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 10 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 30,

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

	thirdParty: {
		cardmarket: 281857,
		tcgplayer: 94509
	}
}

export default card
