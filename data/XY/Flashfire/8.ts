import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre Dodo",
				es: "Somnífero",
				it: "Sonnifero",
				pt: "Pó do Sono",
				de: "Schlafpuder"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				es: "Corte",
				it: "Taglio",
				pt: "Cortar",
				de: "Zerschneider"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
