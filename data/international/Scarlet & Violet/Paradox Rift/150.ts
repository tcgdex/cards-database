import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [295],
	set: Set,

	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'es-es': "Exploud",
		'it-it': "Exploud",
		'pt-br': "Exploud",
		'de-de': "Krawumms"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sudden Shout",
			'fr-fr': "Cri Soudain",
			'es-es': "Bramido Súbito",
			'it-it': "Urlo Improvviso",
			'pt-br': "Grito Repentino",
			'de-de': "Schlagartiger Schrei"
		},

		effect: {
			'en-us': "Discard your opponent's Active Pokémon and all attached cards. If this Pokémon didn't evolve from Loudred during this turn, this attack does nothing.",
			'fr-fr': "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. Si ce Pokémon n'a pas évolué de Ramboum pendant ce tour, cette attaque ne fait rien.",
			'es-es': "Descarta el Pokémon Activo de tu rival y todas las cartas unidas a él. Si este Pokémon no ha evolucionado de Loudred durante este turno, este ataque no hace nada.",
			'it-it': "Scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate. Se questo Pokémon non si è evoluto da Loudred durante questo turno, questo attacco non ha effetto.",
			'pt-br': "Descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele. Se este Pokémon não evoluiu de Loudred durante este turno, este ataque não fará nada.",
			'de-de': "Lege das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges nicht aus Krakeelo entwickelt hat, hat diese Attacke keine Auswirkungen."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbang",
			'fr-fr': "Frappe de Tête",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'pt-br': "Baque de Cabeça",
			'de-de': "Headbangen"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon can do more than just shout. To communicate with others of its kind, it'll emit all sorts of sounds from the holes in its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740690,
				tcgplayer: 523831,
				cardtrader: 265273
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740690,
				tcgplayer: 523831,
				cardtrader: 265273
			}
		},
	],

	illustrator: "LINNE",

	
}

export default card
