import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball."
	},

	name: {
		en: "Cherubi",
		fr: "Ceribou",
		de: "Kikugi",
		es: "Cherubi",
		it: "Cherubi",
		'es-mx': "Cherubi",
		pt: "Cherubi"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [420],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hide",
			fr: "Cachette",
			de: "Verstecken",
			es: "Ocultarse",
			it: "Nascondino",
			'es-mx': "Escondite",
			pt: "Esconder"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Flop",
			fr: "Flop",
			de: "Plumps",
			es: "Vuelta",
			it: "Tonfo",
			'es-mx': "Desplome",
			pt: "Baque"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907612,
				tcgplayer: 716440
			}
		}
	],
}

export default card
