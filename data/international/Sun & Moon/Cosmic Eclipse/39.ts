import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
		'es-es': "Vulpix de Alola",
		'it-it': "Vulpix di Alola",
		'pt-br': "Vulpix de Alola",
		'de-de': "Alola Vulpix"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Snowed In",
				'fr-fr': "Enneigé",
				'es-es': "Bajo Nieve",
				'it-it': "Sotto la Neve",
				'pt-br': "Cercado de Neve",
				'de-de': "Eingeschneit"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco, sia tuo che del tuo avversario.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, prevenirá todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If you carelessly approach it because it's cute, the boss of the pack, Ninetales, will appear and freeze you.",
	},

	thirdParty: {
		cardmarket: 407844,
		tcgplayer: 201215
	}
}

export default card
