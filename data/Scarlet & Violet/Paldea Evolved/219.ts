import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Simularbre",
		en: "Sudowoodo",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Frappe et Cachette",
			en: "Hit and Hide",
			es: "Golpear y Esconder",
			it: "Nascondicolpo",
			pt: "Bate e Esconde",
			de: "Versteckschlag"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Coup de Coude",
			en: "Elbow Strike",
			es: "Codazo",
			it: "Colpogomito",
			pt: "Golpe de Cotovelo",
			de: "Ellbogenstoß"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card