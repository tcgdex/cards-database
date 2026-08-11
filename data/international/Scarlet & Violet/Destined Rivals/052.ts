import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [349],
	set: Set,

	name: {
		'en-us': "Cynthia's Feebas",
		'fr-fr': "Barpau de Cynthia",
		'de-de': "Cynthias Barschwa",
		'it-it': "Feebas di Camilla",
		'es-es': "Feebas de Cintia",
		'pt-br': "Feebas da Cíntia",
		'es-mx': "Feebas de Cynthia"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Undulate",
			'fr-fr': "Nage Ondulée",
			'de-de': "Wellengang",
			'it-it': "Ondeggiare",
			'es-es': "Ondular",
			'pt-br': "Ondulação",
			'es-mx': "Ondulación"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825926,
				tcgplayer: 632865
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825926,
				tcgplayer: 632865
			}
		},
	],
}

export default card
