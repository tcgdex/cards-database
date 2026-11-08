import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Caturday",
				'fr-fr': "Chamedi",
				'es-es': "Sábado Gatuno",
				'it-it': "Giornogatto",
				'pt-br': "Dia de Gato",
				'de-de': "Schnurrtag"
			},
			effect: {
				'en-us': "Draw 2 cards. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Piochez 2 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Roba 2 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Pesca due carte. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Compre 2 cartas. Se fizer isto, este Pokémon será Adormecido.",
				'de-de': "Ziehe 2 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
				'es-es': "Coletón",
				'it-it': "Codabotta",
				'pt-br': "Surra de Cauda",
				'de-de': "Schweifvertrimmer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When visiting a junkyard, you may catch sight of it having an intense fight with Murkrow over shiny objects.",
	},

	thirdParty: {
		cardmarket: 372433,
		tcgplayer: 189247
	}
}

export default card
