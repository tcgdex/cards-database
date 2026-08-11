import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [76],
	set: Set,

	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'es-es': "Golem",
		'it-it': "Golem",
		'pt-br': "Golem",
		'de-de': "Geowaz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'pt-br': "Graveler",
		'de-de': "Georok"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		'en-us': "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Desperate Blast",
			'fr-fr': "Explosion Désespérée",
			'de-de': "Verzweiflungsexplosion",
			'es-es': "Explosión Desesperada",
			'pt-br': "Explosão Desesperada",
			'it-it': "Esplosione Disperata"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 10 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez 10 marqueurs de dégâts sur le Pokémon Attaquant.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 10 Schadensmarken auf das Angreifende Pokémon.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 10 contadores de daño en el Pokémon Atacante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 10 contadores de dano no Pokémon Atacante.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti 10 segnalini danno sul Pokémon attaccante."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'de-de': "Risikotackle",
			'es-es': "Doble Filo",
			'pt-br': "Faca de Dois Gumes",
			'it-it': "Sdoppiatore"
		},

		damage: 160,

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582736,
				tcgplayer: 253342
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582736,
				tcgplayer: 253342
			}
		},
	],
}

export default card
