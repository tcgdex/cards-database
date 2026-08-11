import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 50,

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
				'en-us': "Lazy Howl",
				'fr-fr': "Hurlement Paresseux",
				'es-es': "Aullido Holgazán",
				'it-it': "Lagna Indolente",
				'pt-br': "Uivo Preguiçoso",
				'de-de': "Faules Jaulen"
			},
			effect: {
				'en-us': "During your opponent’s next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, s’il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
				'es-es': "Durante el próximo turno de tu rival, si une 1 carta de Energía de su mano al Pokémon Defensor, su turno termina.",
				'it-it': "Se il tuo avversario assegna al Pokémon difensore una carta Energia dalla sua mano durante il suo prossimo turno, il suo turno finisce.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se o seu oponente ligar uma carta de Energia da própria mão ao Pokémon Defensor, a vez dele(a) jogar acabará.",
				'de-de': "Wenn dein Gegner während seines nächsten Zuges 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, endet sein Zug."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hang Down",
				'fr-fr': "Suspension",
				'es-es': "Prender",
				'it-it': "Tirar Giù",
				'pt-br': "Dependurar",
				'de-de': "Herunterhängen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The way Slakoth lolls around makes anyone who watches it feel like doing the same.",
	},

	thirdParty: {
		cardmarket: 388622,
		tcgplayer: 195167
	}
}

export default card
