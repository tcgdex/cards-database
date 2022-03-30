import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Glalie EX",
		fr: "M-Oniglali EX",
		es: "M-Glalie EX",
		it: "M Glalie EX",
		pt: "M-Glalie EX",
		de: "M-Firnontor EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Glalie-EX",
		fr: "Oniglali-EX",
		es: "Glalie-EX",
		it: "Glalie-EX",
		pt: "Glalie-EX",
		de: "Firnontor-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cryo Mouth",
				fr: "Cryo Bouche",
				es: "Cryoboca",
				it: "Criobocca",
				pt: "Boca Criogênica",
				de: "Kryo-Mund"
			},
			effect: {
				en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
				fr: "Si ce Pokémon a 10 marqueurs de dégâts ou plus, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 10 o más contadores de daño sobre él, este ataque hace 150 puntos de daño más.",
				it: "Se questo Pokémon ha 10 o più segnalini danno, questo attacco infligge 150 danni in più.",
				pt: "Se este Pokémon possuir 10 ou mais contadores de danos, este ataque causará 150 de danos adicionais.",
				de: "Wenn auf diesem Pokémon mindestens 10 Schadensmarken liegen, fügt dieser Angriff 150 weitere Schadenspunkte zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
