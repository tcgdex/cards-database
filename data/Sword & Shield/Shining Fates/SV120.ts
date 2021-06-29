import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Moumouflon V",
		en: "Dubwool V",
		es: "Dubwool V",
		it: "Dubwool V",
		pt: "Dubwool V",
		de: "Zwollock V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Laine Douce",
			en: "Soft Wool",
			es: "Lana Suave",
			it: "Lana Soffice",
			pt: "Lã Fofinha",
			de: "Weiche Wolle"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			fr: "Explo-Vengeance",
			en: "Revenge Blast",
			es: "Estallido Venganza",
			it: "Vendicabomba",
			pt: "Raio de Vingança",
			de: "Rachestoß"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede der von deinem Gegner genommenen Preiskarten 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card