import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [767],
	set: Set,

	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

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
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Wimpod gather in swarms, constantly on the lookout for danger. They scatter the moment they detect an enemy's presence.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740527,
				tcgplayer: 523656,
				cardtrader: 265121
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740527,
				tcgplayer: 523656,
				cardtrader: 265121
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
