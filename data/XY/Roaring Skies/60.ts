import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Rayquaza EX",
		fr: "Rayquaza EX",
		es: "Rayquaza EX",
		it: "Rayquaza EX",
		pt: "Rayquaza EX",
		de: "Rayquaza EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Strike",
				fr: "Frappe du Dragon",
				es: "Golpe Dragón",
				it: "Dragocolpo",
				pt: "Ataque de Dragão",
				de: "Drachenhieb"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't use Dragon Strike during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede usar Golpe Dragón durante tu próximo turno.",
				it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può usare Dragocolpo.",
				pt: "Jogue uma moeda. Se sair coroa, este Pokémon não poderá usar o Ataque de Dragão na sua próxima vez de jogar.",
				de: "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon Drachenhieb während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
