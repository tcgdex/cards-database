import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'fr-fr': "Moumouflon V",
		'en-us': "Dubwool V",
		'es-es': "Dubwool V",
		'it-it': "Dubwool V",
		'pt-br': "Dubwool V",
		'de-de': "Zwollock V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Laine Douce",
			'en-us': "Soft Wool",
			'es-es': "Lana Suave",
			'it-it': "Lana Soffice",
			'pt-br': "Lã Fofinha",
			'de-de': "Weiche Wolle"
		},

		effect: {
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Explo-Vengeance",
			'en-us': "Revenge Blast",
			'es-es': "Estallido Venganza",
			'it-it': "Vendicabomba",
			'pt-br': "Raio de Vingança",
			'de-de': "Rachestoß"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'en-us': "This attack does 30 more damage for each Prize card your opponent has taken.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Diese Attacke fügt für jede der von deinem Gegner genommenen Preiskarten 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539988,
				tcgplayer: 232516
			}
		},
	],
}

export default card
