import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [407],
	set: Set,

	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poison Point",
			'fr-fr': "Point Poison",
			'es-es': "Punto Tóxico",
			'it-it': "Velenopunte",
			'pt-br': "Ponto Venenoso",
			'de-de': "Giftdorn"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante agora estará Envenenado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "After captivating opponents with its sweet scent, it lashes them with its thorny whips.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760639,
				tcgplayer: 542759
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760639,
				tcgplayer: 542759
			}
		},
	],

	illustrator: "Gapao",

}

export default card