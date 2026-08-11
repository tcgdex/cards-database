import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [779],
	set: Set,

	name: {
		'en-us': "Bruxish",
		'fr-fr': "Denticrisse",
		'es-es': "Bruxish",
		'it-it': "Bruxish",
		'pt-br': "Bruxish",
		'de-de': "Knirfish"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Counterattack",
			'fr-fr': "Contre-Attaque",
			'es-es': "Contragolpe",
			'it-it': "Respinta",
			'pt-br': "Contra-ataque",
			'de-de': "Gegenangriff"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 3 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'es-es': "Gran Mordisco",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'de-de': "Mächtiger Biss"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794315,
				tcgplayer: 589883
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794315,
				tcgplayer: 589883
			}
		},
	],

	illustrator: "Shibuzoh.",
	
}

export default card
