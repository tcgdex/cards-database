import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
		'es-es': "Cleffa",
		'it-it': "Cleffa",
		'pt-br': "Cleffa",
		'de-de': "Pii"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		173,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Excitable Draw",
				'fr-fr': "Pioche Émotive",
				'es-es': "Robo Emocionante",
				'it-it': "Pesca Emozionante",
				'pt-br': "Compra Serelepe",
				'de-de': "Vorlauter Zug"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, shuffle your hand into your deck and then draw 6 cards. If you use this Ability, your turn ends.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, mélangez votre main avec votre deck, puis piochez 6 cartes. Si vous utilisez ce talent, votre tour se termine.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, pon las cartas de tu mano en tu baraja, barájalas todas y, después, roba 6 cartas. Si usas esta habilidad, tu turno termina.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, rimischia le carte che hai in mano nel tuo mazzo e pesca sei carte. Se usi questa abilità, il tuo turno finisce.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, embaralhe a sua mão no seu baralho e compre 6 cartas. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Mische bei Kopf deine Handkarten in dein Deck und ziehe anschließend 6 Karten. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	description: {
		'en-us': "On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!",
	},

	thirdParty: {
		cardmarket: 372211,
		tcgplayer: 189229
	}
}

export default card
