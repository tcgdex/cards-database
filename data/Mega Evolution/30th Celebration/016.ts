import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It lazes vacantly near water. If something bites its tail, it won't even notice for a whole day."
	},

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon",
		es: "Slowpoke",
		it: "Slowpoke",
		'es-mx': "Slowpoke"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Well-Hidden",
			fr: "Bien Caché",
			de: "Gut versteckt",
			es: "Buen Escondite",
			it: "Ben Nascosto",
			'es-mx': "Buen Escondite"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			de: "Aquaknarre",
			es: "Pistola Agua",
			it: "Pistolacqua",
			'es-mx': "Chorro de Agua"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907622,
				tcgplayer: 716449
			}
		}
	],
}

export default card