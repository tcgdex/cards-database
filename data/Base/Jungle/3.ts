import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		it: "Flareon",
		de: "Flamara"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		it: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				it: "Attacco Rapido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				it: "Lancia una moneta. Se esce testa questo attacco infligge 10 danni più altri 20 danni; se esce croce questo attacco infligge 10 danni.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flammes",
				it: "Lanciafiamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Flareon in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Pyroli pour pouvoir utiliser cette attaque.",
				it: "Scarta una carta Energia Fuoco assegnata a Flareon per potere usare questo attacco.",
				de: "Entferne eine auf Flamara abgelegte {R}-Energiekarte, um diesen Angriff auszuführen."
			},
			damage: 60,

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
		en: "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
		fr: "Il peut accumuler suffisamment de chaleur pour atteindre des températures de 1600 degrés.",
		it: "Quando immagazzina energia termica nel proprio corpo, la sua temperatura può aumentare oltre gli 850 °C.",
		de: "Beim Speichern von Wärmeenergie in seinem Körper erreicht es eine Temperatur von über 900 Grad."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273800,
				tcgplayer: 45129
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273800,
				tcgplayer: 45129
			}
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		}
	],
}

export default card
