import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [676],
	set: Set,

	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
		'es-es': "Furfrou",
		'it-it': "Furfrou",
		'pt-br': "Furfrou",
		'de-de': "Coiffwaff"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo",
			'de-de': "Freunde finden"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Fur Attack",
			'fr-fr': "Coup Fourré",
			'es-es': "Ataque Peludo",
			'it-it': "Mantoattacco",
			'pt-br': "Golpe Felpudo",
			'de-de': "Fellangriff"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567234,
				tcgplayer: 241808
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567234,
				tcgplayer: 241808
			}
		},
	],
}

export default card
