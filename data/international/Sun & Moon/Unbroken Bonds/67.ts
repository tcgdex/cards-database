import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Swelling Spite",
				'fr-fr': "Mépris Montant",
				'es-es': "Rencor Ascendente",
				'it-it': "Crescita Dispettosa",
				'pt-br': "Rancor Crescente",
				'de-de': "Wachsender Groll"
			},
			effect: {
				'en-us': "When this Pokémon is Knocked Out, search your deck for up to 2 Haunter and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Lorsque ce Pokémon est mis K.O., cherchez jusqu’à 2 Spectrum dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Cuando este Pokémon quede Fuera de Combate, busca en tu baraja hasta 2 Haunter y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Quando questo Pokémon viene messo KO, cerca nel tuo mazzo fino a due Haunter e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Quando este Pokémon for Nocauteado, procure por até 2 Haunter no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn dieses Pokémon kampfunfähig wird, durchsuche dein Deck nach bis zu 2 Alpollo und lege sie auf deine Bank. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
				'es-es': "Fuego Fatuo",
				'it-it': "Fuocofatuo",
				'pt-br': "Fogo Fátuo",
				'de-de': "Irrlicht"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's said that gas emanating from a graveyard was possessed by the grievances of the deceased and thus became a Pokémon.",
	},

	thirdParty: {
		cardmarket: 372355,
		tcgplayer: 189167
	}
}

export default card
