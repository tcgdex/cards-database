import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'de-de': "Snomnom",
		'it-it': "Snom",
		'es-es': "Snom",
		'pt-br': "Snom",
		'es-mx': "Snom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	dexId: [872],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hide",
			'fr-fr': "Cachette",
			'de-de': "Verstecken",
			'it-it': "Nascondino",
			'es-es': "Ocultarse",
			'pt-br': "Esconder",
			'es-mx': "Escondite"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851113,
				tcgplayer: 654381
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851113,
				tcgplayer: 654381
			}
		},
	],
}

export default card
