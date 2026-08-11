import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'fr-fr': "Germéclat",
		'en-us': "Glimmet",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Mur de Fer",
			'en-us': "Iron Defense",
			'es-es': "Defensa Férrea",
			'it-it': "Ferroscudo",
			'pt-br': "Defesa de Ferro",
			'de-de': "Eisenabwehr"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'fr-fr': "Suspension",
			'en-us': "Hang Down",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725201,
				tcgplayer: 509873,
				cardtrader: 255806
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725201,
				tcgplayer: 509873,
				cardtrader: 255806
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card
