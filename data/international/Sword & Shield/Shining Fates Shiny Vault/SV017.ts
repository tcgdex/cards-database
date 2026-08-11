import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'fr-fr': "Pyrobut",
		'en-us': "Cinderace",
		'es-es': "Cinderace",
		'it-it': "Cinderace",
		'pt-br': "Cinderace",
		'de-de': "Liberlo"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Lapyro",
		'en-us': "Raboot"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Libéro",
			'en-us': "Libero",
			'es-es': "Líbero",
			'it-it': "Libero",
			'pt-br': "Líbero",
			'de-de': "Libero"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez lui attacher jusqu'à 2 cartes Énergie Fire de votre pile de défausse.",
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may attach up to 2 Fire Energy cards from your discard pile to it.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes unirle hasta 2 cartas de Energía Fire de tu pila de descartes.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi assegnargli fino a due carte Energia Fire dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá ligar até 2 cartas de Energia Fire da sua pilha de descarte a ele.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du bis zu 2 Fire-Energiekarten aus deinem Ablagestapel an es anlegen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "But Enflammé",
			'en-us': "Flare Striker",
			'es-es': "Delantero Ígneo",
			'it-it': "Cannoniere Ardente",
			'pt-br': "Artilheiro em Chamas",
			'de-de': "Feuerstürmer"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		'en-us': "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539473,
				tcgplayer: 232365
			}
		},
	],
}

export default card
