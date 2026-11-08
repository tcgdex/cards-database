import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [912],
	set: Set,

	name: {
		'fr-fr': "Coiffeton",
		'en-us': "Quaxly",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Application de Gel",
			'en-us': "Apply Gel",
			'es-es': "Aplicar Gel",
			'it-it': "Applicagel",
			'pt-br': "Passar Gel",
			'de-de': "Gel auftragen"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			'it-it': "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715523,
				tcgplayer: 497460,
				cardtrader: 248652
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715523,
				tcgplayer: 497460,
				cardtrader: 248652
			}
		},
	],

	illustrator: "sui",

	description: {
		'en-us': "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
	},
}

export default card
