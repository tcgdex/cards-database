import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Heart Wink",
				'fr-fr': "Clin de Cœur",
				'es-es': "Guiño Corazón",
				'it-it': "Cuorammicca",
				'pt-br': "Pestanejo de Coração",
				'de-de': "Herzflattern"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't draw a card at the beginning of his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas piocher de carte au début de son prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival no puede robar 1 carta al principio de su próximo turno.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario non può pescare una carta all'inizio del suo prossimo turno.",
				'pt-br': "Jogue uma moeda. Se sair cara, seu oponente não poderá comprar um card no começo da próxima vez de jogar dele ou dela.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner zu Beginn seines nächsten Zuges keine Karte ziehen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spike Draw",
				'fr-fr': "Pique-Pioche",
				'es-es': "Robo Pico",
				'it-it': "Pescospina",
				'pt-br': "Comprada Espinhosa",
				'de-de': "Stachelzug"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love.",
	},

	thirdParty: {
		cardmarket: 281510,
		tcgplayer: 91160
	}
}

export default card
