import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [76],
	set: Set,

	name: {
		en: "Golem",
		fr: "Grolem",
		es: "Golem",
		it: "Golem",
		pt: "Golem",
		de: "Geowaz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
		es: "Graveler",
		it: "Graveler",
		pt: "Graveler",
		de: "Georok"
	},

	stage: "Stage2",
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		en: "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Desperate Blast",
			fr: "Explosion Désespérée",
			de: "Verzweiflungsexplosion",
			es: "Explosión Desesperada",
			pt: "Explosão Desesperada",
			it: "Esplosione Disperata"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 10 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 10 marqueurs de dégâts sur le Pokémon Attaquant.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 10 Schadensmarken auf das Angreifende Pokémon.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 10 contadores de daño en el Pokémon Atacante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 10 contadores de dano no Pokémon Atacante.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti 10 segnalini danno sul Pokémon attaccante."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			de: "Risikotackle",
			es: "Doble Filo",
			pt: "Faca de Dois Gumes",
			it: "Sdoppiatore"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582736
	}
}

export default card