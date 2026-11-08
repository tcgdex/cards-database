import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'de-de': "Maracamba",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'es-mx': "Maractus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exploding Needles",
			'fr-fr': "Épines Explosives",
			'es-es': "Espinas Explosivas",
			'de-de': "Explodierende Stacheln",
			'it-it': "Deflagrazione di Aculei",
			'pt-br': "Espinhos Explosivos",
			'es-mx': "Espinas Explosivas"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 6 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 6 Schadensmarken auf das Angreifende Pokémon.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, metti sei segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque 6 contadores de dano no Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, pon 6 contadores de daño en el Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'de-de': "Bedrängen",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'es-mx': "Arrinconar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Dsuke",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817160,
				tcgplayer: 623435
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817160,
				tcgplayer: 623435
			}
		},
	],
}

export default card
