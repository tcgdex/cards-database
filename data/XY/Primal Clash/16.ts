import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamopoing",
				es: "Puño Dinámico",
				it: "Dinamipugno",
				pt: "Soco Dinâmico",
				de: "Wuchtschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais e o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi",
				es: "Megapatada",
				it: "Megacalcio",
				pt: "Mega Chute",
				de: "Megakick"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273547
	}
}

export default card
