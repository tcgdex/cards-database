import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d’Alola",
		'es-es': "Meowth de Alola",
		'it-it': "Meowth di Alola",
		'pt-br': "Meowth de Alola",
		'de-de': "Alola-Mauzi"
	},

	illustrator: "sui",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'es-es': "Maquinación",
				'it-it': "Congiura",
				'pt-br': "Trama Maldosa",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Lancia una moneta. Se testa, cerca una carta nel tuo mazzo e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon was not originally found in Alola. Human actions caused a surge in their numbers, and they went feral. They're prideful and crafty.",
	},
}

export default card
