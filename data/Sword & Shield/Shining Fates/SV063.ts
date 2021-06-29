import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Canarticho de Galar",
		en: "Galarian Farfetch’d",
		es: "Farfetch’d de Galar",
		it: "Farfetch’d di Galar",
		pt: "Farfetch’d de Galar",
		de: "Galar-Porenta"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Éclate-Roc",
			en: "Rock Smash",
			es: "Golpe Roca",
			it: "Spaccaroccia",
			pt: "Esmagamento de Pedras",
			de: "Zertrümmerer"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card