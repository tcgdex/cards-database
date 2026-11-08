import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Weak Kneed",
				'fr-fr': "Genoux Tremblants",
				'es-es': "Rodillas Temblonas",
				'it-it': "Smidollato",
				'pt-br': "Morrer de Medo",
				'de-de': "Weiche Knie"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
				'es-es': "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell’attacco non ha effetto.",
				'pt-br': "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não fará nada.",
				'de-de': "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl hat jene Attacke keine Auswirkungen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Skip",
				'fr-fr': "Sautiller",
				'es-es': "Saltito",
				'it-it': "Saltello",
				'pt-br': "Saltitar",
				'de-de': "Hüpfer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.",
	},

	thirdParty: {
		cardmarket: 316032,
		tcgplayer: 157723
	}
}

export default card
