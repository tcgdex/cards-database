import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Omastar BREAK",
		'fr-fr': "Amonistar TURBO",
		'es-es': "Omastar TURBO",
		'it-it': "Omastar TURBO",
		'pt-br': "Omastar TURBO",
		'de-de': "Amoroso-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'es-es': "Omastar",
		'it-it': "Omastar",
		'pt-br': "Omastar",
		'de-de': "Amoroso"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dangerous Tentacle",
				'fr-fr': "Tentacule Dangereux",
				'es-es': "Tentáculo Peligroso",
				'it-it': "Tentacoli Pericolosi",
				'pt-br': "Tentáculo Perigoso",
				'de-de': "Gefährliche Tentakel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon-EX with his or her Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour(avant votre attaque), vous pouvez échanger l'un des Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar 1 de los Pokémon-EX en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare uno dei Pokémon-EX nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode trocar 1 dos Pokémon-EX no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-EX auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners austauschen."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289845,
		tcgplayer: 117781
	}
}

export default card
