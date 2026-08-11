import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Smokescreen",
			'fr-fr': "Brouillard",
			'es-es': "Pantalla de Humo",
			'it-it': "Muro di Fumo",
			'pt-br': "Cortina de Fumaça",
			'de-de': "Rauchwolke"
		},

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se hace.",
			'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não acontecerá.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545101,
				tcgplayer: 234154
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545101,
				tcgplayer: 234154
			}
		},
	],
}

export default card
