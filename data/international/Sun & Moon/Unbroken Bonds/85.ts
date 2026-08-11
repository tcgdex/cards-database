import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Underground Work",
				'fr-fr': "Travail Souterrain",
				'es-es': "Trabajo Subterráneo",
				'it-it': "Lavoro Sotterraneo",
				'pt-br': "Obra Subterrânea",
				'de-de': "Untergrundarbeiten"
			},
			effect: {
				'en-us': "If you discard this Pokémon with the effect of Giovanni’s Exile, discard the top card of your opponent’s deck.",
				'fr-fr': "Si vous défaussez ce Pokémon du fait de l’effet d’Exil de Giovanni, défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Si descartas este Pokémon con el efecto de la carta Exilio de Giovanni, descarta la primera carta de la baraja de tu rival.",
				'it-it': "Se scarti questo Pokémon per effetto di Esilio di Giovanni, scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Se você descartar este Pokémon com o efeito de Exílio do Giovanni, descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Wenn du dieses Pokémon mit dem Effekt von Giovannis Exil auf deinen Ablagestapel legst, lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'es-es': "Garfio",
				'it-it': "Uncino",
				'pt-br': "Gancho",
				'de-de': "Haken"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It travels through tunnels that it digs underground. It hates sunlight, so it comes out only after the sun goes down.",
	},

	thirdParty: {
		cardmarket: 372376,
		tcgplayer: 189184
	}
}

export default card
