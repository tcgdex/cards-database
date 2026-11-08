import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	illustrator: "DemizuPosuka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
	},

	stage: "Stage2",

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	attacks: [{
		name: {
			'en-us': "Triple Poison",
			'fr-fr': "Triple Poison",
			'es-es': "Veneno Triple",
			'it-it': "Triplo Veleno",
			'pt-br': "Veneno Triplo",
			'de-de': "Dreifachgift"
		},

		effect: {
			'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 3 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti tre segnalini danno invece di uno su quel Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 3 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Surprise Strike",
			'fr-fr': "Frappe Surprise",
			'es-es': "Golpe Sorpresa",
			'it-it': "Colpo a Sorpresa",
			'pt-br': "Golpe Surpresa",
			'de-de': "Überraschungsschlag"
		},

		damage: "60+",

		effect: {
			'en-us': "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 60 danni in più.",
			'pt-br': "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	retreat: 0,

	description: {
		'en-us': "Both its legs became wings, and as a result, it can't move well on the ground. All it can do is crawl around.",
	},

	thirdParty: {
		cardmarket: 295367,
		tcgplayer: 126927
	}
}

export default card
