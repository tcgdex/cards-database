import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		de: "Sheinux",
		it: "Shinx",
		pt: "Shinx"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		403
	],
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Lightning"
			],
			name: {
				en: "Double Scratch",
				fr: "Double Écorchure",
				es: "Arañazo Doble",
				de: "Doppelkratzer",
				it: "Doppio Graffio",
				pt: "Arranhão Duplo"
			},
			damage: "10×",
			effect: {
				en: "Flip 2 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
				it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Saboteri",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684409,
		cardmarket: 877439
	}
}

export default card
