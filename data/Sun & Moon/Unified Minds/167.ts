import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
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
				en: "Lazy Howl",
				fr: "Hurlement Paresseux",
				es: "Aullido Holgazán",
				it: "Lagna Indolente",
				pt: "Uivo Preguiçoso",
				de: "Faules Jaulen"
			},
			effect: {
				en: "During your opponent’s next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
				fr: "Pendant le prochain tour de votre adversaire, s’il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
				es: "Durante el próximo turno de tu rival, si une 1 carta de Energía de su mano al Pokémon Defensor, su turno termina.",
				it: "Se il tuo avversario assegna al Pokémon difensore una carta Energia dalla sua mano durante il suo prossimo turno, il suo turno finisce.",
				pt: "Durante a próxima vez de jogar do seu oponente, se o seu oponente ligar uma carta de Energia da própria mão ao Pokémon Defensor, a vez dele(a) jogar acabará.",
				de: "Wenn dein Gegner während seines nächsten Zuges 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, endet sein Zug."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hang Down",
				fr: "Suspension",
				es: "Prender",
				it: "Tirar Giù",
				pt: "Dependurar",
				de: "Herunterhängen"
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

	thirdParty: {
		cardmarket: 388622
	}
}

export default card
