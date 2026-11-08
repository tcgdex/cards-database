import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		'fr-fr': "Lilliterelle",
		'en-us': "Nymble",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Éclaboussure Légère",
			'en-us': "Slight Splash",
			'es-es': "Pequeño Saltito",
			'it-it': "Piccolo Splash",
			'pt-br': "Borrifadinha",
			'de-de': "Mickriger Platscher"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Piqûre",
			'en-us': "Bug Bite",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715492,
				tcgplayer: 497430,
				cardtrader: 248316
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715492,
				tcgplayer: 497430,
				cardtrader: 248316
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "It has its third set of legs folded up. When it's in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
	},
}

export default card
