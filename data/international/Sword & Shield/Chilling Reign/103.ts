import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Ghostly Cries",
			'fr-fr': "Lamentations Spectrales",
			'es-es': "Llantos Fantasmales",
			'it-it': "Grida Spettrali",
			'pt-br': "Lamento Fantasmagórico",
			'de-de': "Gespenstische Schreie"
		},

		effect: {
			'en-us': "For each Pokémon in your opponent's discard pile, put 1 damage counter on your opponent's Pokémon in any way you like. If you placed any damage counters in this way, your opponent shuffles all Pokémon from their discard pile into their deck.",
			'fr-fr': "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire comme il vous plaît. Si vous avez placé des marqueurs de dégâts de cette façon, votre adversaire mélange tous les Pokémon de sa pile de défausse avec son deck.",
			'es-es': "Por cada Pokémon en la pila de descartes de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees. Si has puesto algún contador de daño de esta manera, tu rival pone todos los Pokémon de su pila de descartes en su baraja y baraja todas las cartas.",
			'it-it': "Per ogni Pokémon nella pila degli scarti del tuo avversario, metti un segnalino danno sui suoi Pokémon nel modo che preferisci. Se hai messo dei segnalini danno in questo modo, il tuo avversario rimischia tutti i Pokémon dalla sua pila degli scarti nel suo mazzo.",
			'pt-br': "Para cada Pokémon na pilha de descarte do seu oponente, coloque 1 contador de dano nos Pokémon do seu oponente como desejar. Se você colocou algum contador de dano desta forma, o seu oponente embaralhará todos os Pokémon da pilha de descarte dele(a) no baralho dele(a).",
			'de-de': "Lege für jedes Pokémon im Ablagestapel deines Gegners 1 Schadensmarke beliebig auf die Pokémon deines Gegners. Wenn du auf diese Weise Schadensmarken platziert hast, mischt dein Gegner alle Pokémon aus seinem Ablagestapel in sein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'de-de': "Irrlicht"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567211,
				tcgplayer: 241777
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567211,
				tcgplayer: 241777
			}
		},
	],
}

export default card
