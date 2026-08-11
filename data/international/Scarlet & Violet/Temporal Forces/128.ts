import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [206],
	set: Set,

	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dig",
			'fr-fr': "Tunnel",
			'es-es': "Excavar",
			'it-it': "Fossa",
			'pt-br': "Cavar",
			'de-de': "Schaufler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "It creates mazes in dark locations. When spotted, it flees into the ground by digging with its tail.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760758,
				tcgplayer: 542872
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760758,
				tcgplayer: 542872
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

}

export default card