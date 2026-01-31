import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		'es-mx': "Marill",
		de: "Marill",
		it: "Marill",
		pt: "Marill"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [183],

	attacks: [{
		cost: ["Colorless"],

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
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			'es-mx': "Desplome",
			de: "Plumps",
			it: "Tonfo",
			pt: "Baque"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675895,
		cardmarket: 869694
	}
}

export default card