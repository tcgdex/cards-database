import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		'fr-fr': "Canarticho de Galar",
		'en-us': "Galarian Farfetch'd",
		'es-es': "Farfetch'd de Galar",
		'it-it': "Farfetch'd di Galar",
		'pt-br': "Farfetch'd de Galar",
		'de-de': "Galar-Porenta"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Éclate-Roc",
			'en-us': "Rock Smash",
			'es-es': "Golpe Roca",
			'it-it': "Spaccaroccia",
			'pt-br': "Esmagamento de Pedras",
			'de-de': "Zertrümmerer"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "The Farfetch'd of the Galar region are brave warriors, and they wield thick, tough leeks in battle."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539703,
				tcgplayer: 232431
			}
		},
	],
}

export default card
