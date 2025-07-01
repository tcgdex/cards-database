import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Barraskewda",
		fr: "Hastacuda",
		de: "Barrakiefa",
		it: "Barraskewda",
		es: "Barraskewda",
		pt: "Barraskewda",
		'es-mx': "Barraskewda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
			de: "Schneidige Flosse",
			it: "Pinnaffilata",
			es: "Cortaleta",
			pt: "Barbatana Afiada",
			'es-mx': "Aleta Afilada"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Dive",
			fr: "Plongée",
			de: "Taucher",
			it: "Sub",
			es: "Buceo",
			pt: "Mergulho",
			'es-mx': "Buceo"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
