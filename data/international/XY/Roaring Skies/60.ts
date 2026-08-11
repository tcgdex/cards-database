import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Rayquaza EX",
		'fr-fr': "Rayquaza EX",
		'es-es': "Rayquaza EX",
		'it-it': "Rayquaza EX",
		'pt-br': "Rayquaza EX",
		'de-de': "Rayquaza EX"
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
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
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
				'en-us': "Dragon Strike",
				'fr-fr': "Frappe du Dragon",
				'es-es': "Golpe Dragón",
				'it-it': "Dragocolpo",
				'pt-br': "Ataque de Dragão",
				'de-de': "Drachenhieb"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't use Dragon Strike during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede usar Golpe Dragón durante tu próximo turno.",
				'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può usare Dragocolpo.",
				'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon não poderá usar o Ataque de Dragão na sua próxima vez de jogar.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon Drachenhieb während deines nächsten Zuges nicht einsetzen."
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
	stage: "Basic",

	thirdParty: {
		cardmarket: 282728,
		tcgplayer: 98096
	}
}

export default card
