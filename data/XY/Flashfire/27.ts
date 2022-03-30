import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
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
				en: "Heart Wink",
				fr: "Clin de Cœur",
				es: "Guiño Corazón",
				it: "Cuorammicca",
				pt: "Pestanejo de Coração",
				de: "Herzflattern"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't draw a card at the beginning of his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas piocher de carte au début de son prochain tour.",
				es: "Lanza 1 moneda. Si sale cara, tu rival no puede robar 1 carta al principio de su próximo turno.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario non può pescare una carta all'inizio del suo prossimo turno.",
				pt: "Jogue uma moeda. Se sair cara, seu oponente não poderá comprar um card no começo da próxima vez de jogar dele ou dela.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner zu Beginn seines nächsten Zuges keine Karte ziehen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spike Draw",
				fr: "Pique-Pioche",
				es: "Robo Pico",
				it: "Pescospina",
				pt: "Comprada Espinhosa",
				de: "Stachelzug"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre um card.",
				de: "Ziehe 1 Karte."
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



}

export default card
