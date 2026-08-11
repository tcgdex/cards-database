import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'es-es': "Cacturne",
		'it-it': "Cacturne",
		'pt-br': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Payback",
				'fr-fr': "Retour de Poison",
				'es-es': "Venganza Veneno",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Revide Venenoso",
				'de-de': "Giftige Abrechnung"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene avvelenato.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante será Envenenado.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'es-es': "Finta",
				'it-it': "Finta",
				'pt-br': "Ataque Dissimulado",
				'de-de': "Finte"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness, Resistance, or any other effects on that Pokémon.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en ese Pokémon.",
				'it-it': "Questo attacco infligge 50 danni a un Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente su quel Pokémon.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos naquele Pokémon.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf jenem Pokémon nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Packs of them follow travelers through the desert until the travelers can no longer move.",
	},

	thirdParty: {
		cardmarket: 361267,
		tcgplayer: 170830
	}
}

export default card
