import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		736,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Electrical Signal",
				'fr-fr': "Signal Électrique",
				'es-es': "Señal Eléctrica",
				'it-it': "Segnale Elettrico",
				'pt-br': "Sinal Elétrico",
				'de-de': "Elektrisches Signal"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 Pokémon Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Lightning, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Lightning, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon Lightning no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Lightning-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If you find its nest, you shouldn't stick your hand inside. You'll get bitten by an irritated Grubbin.",
	},

	thirdParty: {
		cardmarket: 372311,
		tcgplayer: 189060
	}
}

export default card
