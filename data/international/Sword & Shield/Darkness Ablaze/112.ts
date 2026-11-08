import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [827],

	name: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
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
				'en-us': "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
				'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
				'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483439,
				tcgplayer: 219426
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483439,
				tcgplayer: 219426
			}
		},
	],
}

export default card
