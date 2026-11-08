import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [605],
	set: Set,

	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Hide",
			'fr-fr': "Cachette",
			'es-es': "Ocultarse",
			'it-it': "Nascondino",
			'pt-br': "Esconder",
			'de-de': "Verstecken"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760703,
				tcgplayer: 542817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760703,
				tcgplayer: 542817
			}
		},
	],

	illustrator: "Tomokazu Komiya",

}

export default card