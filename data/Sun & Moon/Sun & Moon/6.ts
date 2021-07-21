import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},
	illustrator: "DemizuPosuka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roof Fling",
				fr: "Lance Auvent",
				es: "Lanzar al Techo",
				it: "Sfondatetto",
				pt: "Arremesso ao Teto",
				de: "Dachschleuder"
			},
			effect: {
				en: "Flip a coin. If heads, put your opponent’s Active Pokémon and all cards attached to it into your opponent’s hand.",
				fr: "Lancez une pièce. Si c’est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la mano de tu rival.",
				it: "Lancia una moneta. Se esce testa, prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e aggiungili alle carte che ha in mano il tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na mão do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf das Aktive Pokémon deines Gegners und alle an es angelegten Karten auf seine Hand."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
				es: "Guillotina",
				it: "Ghigliottina",
				pt: "Guilhotina",
				de: "Guillotine"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
