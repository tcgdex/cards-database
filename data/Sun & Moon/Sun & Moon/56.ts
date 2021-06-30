import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
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
		en: "Golbat",
		fr: "Nosferalto",
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
			en: "Triple Poison",
			fr: "Triple Poison",
			es: "Veneno Triple",
			it: "Triplo Veleno",
			pt: "Veneno Triplo",
			de: "Dreifachgift"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 3 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti tre segnalini danno invece di uno su quel Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 3 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Surprise Strike",
			fr: "Frappe Surprise",
			es: "Golpe Sorpresa",
			it: "Colpo a Sorpresa",
			pt: "Golpe Surpresa",
			de: "Überraschungsschlag"
		},

		damage: "60+",

		effect: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 60 danni in più.",
			pt: "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	retreat: 0
}

export default card
