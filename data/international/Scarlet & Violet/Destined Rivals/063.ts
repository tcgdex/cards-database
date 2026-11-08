import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [847],
	set: Set,

	name: {
		'en-us': "Barraskewda",
		'fr-fr': "Hastacuda",
		'de-de': "Barrakiefa",
		'it-it': "Barraskewda",
		'es-es': "Barraskewda",
		'pt-br': "Barraskewda",
		'es-mx': "Barraskewda"
	},


	illustrator: "Kyoko Umemoto",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'de-de': "Pikuda",
		'it-it': "Arrokuda",
		'es-es': "Arrokuda",
		'pt-br': "Arrokuda",
		'es-mx': "Arrokuda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'de-de': "Schneidige Flosse",
			'it-it': "Pinnaffilata",
			'es-es': "Cortaleta",
			'pt-br': "Barbatana Afiada",
			'es-mx': "Aleta Afilada"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Dive",
			'fr-fr': "Plongée",
			'de-de': "Taucher",
			'it-it': "Sub",
			'es-es': "Buceo",
			'pt-br': "Mergulho",
			'es-mx': "Buceo"
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

		damage: 60
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
				cardmarket: 825937,
				tcgplayer: 632876
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825937,
				tcgplayer: 632876
			}
		},
	],
}

export default card
