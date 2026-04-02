import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Spewpa",
		fr: "Pérégrain",
		es: "Spewpa",
		'es-mx': "Spewpa",
		de: "Puponcho",
		it: "Spewpa",
		pt: "Spewpa"
	},

	illustrator: "kamonabe",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Hide",
			fr: "Cachette",
			es: "Ocultarse",
			'es-mx': "Escondite",
			de: "Verstecken",
			it: "Nascondino",
			pt: "Esconder"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		}
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684365,
		cardmarket: 877506
	}
}

export default card
