import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'en-us': "Oinkologne ex",
		'fr-fr': "Fragroin-ex",
		'es-es': "Oinkologne ex",
		'it-it': "Oinkologne-ex",
		'pt-br': "Oinkologne ex",
		'de-de': "Fragrunz-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Maddening Scent",
			'fr-fr': "Senteur Affolante",
			'es-es': "Fragancia Exasperante",
			'it-it': "Aroma Esasperante",
			'pt-br': "Aroma Enlouquecedor",
			'de-de': "Wahnsinniger Geruch"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Stomp",
			'fr-fr': "Jambes de Plomb",
			'es-es': "Fuerte Pisotón",
			'it-it': "Gran Pestone",
			'pt-br': "Pisoteada Pesada",
			'de-de': "Schwerer Stampfer"
		},

		effect: {
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	thirdParty: {
        cardmarket: 702530,
        tcgplayer: 490092
    }
}

export default card