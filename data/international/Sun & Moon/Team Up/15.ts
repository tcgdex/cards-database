import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whip",
				'fr-fr': "Mimi-Queue",
				'es-es': "Látigo",
				'it-it': "Colpocoda",
				'pt-br': "Cauda Chicote",
				'de-de': "Rutenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its beautiful tails have made it very popular. However, if it's not brushed diligently, it will be a mass of tangles before you know it.",
	},

	thirdParty: {
		cardmarket: 368947,
		tcgplayer: 183786
	}
}

export default card
