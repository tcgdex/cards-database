import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Elgyem",
		fr: "Lewsor",
		es: "Elgyem",
		it: "Elgyem",
		pt: "Elgyem",
		de: "Pygraulon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Hide",
			fr: "Cachette",
			es: "Ocultarse",
			it: "Nascondino",
			pt: "Esconder",
			de: "Verstecken"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card