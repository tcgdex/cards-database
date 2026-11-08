import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

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
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing Léger",
				'es-es': "Puño Ligero",
				'it-it': "Pugnetto",
				'pt-br': "Soco de Luz",
				'de-de': "Leichter Hieb"
			},

			damage: 10,

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
		'en-us': "It prefers harsh environments such as deserts. It can survive for 30 days on water stored in its body.",
	},

	thirdParty: {
		cardmarket: 361266,
		tcgplayer: 170829
	}
}

export default card
