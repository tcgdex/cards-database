import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Dragalge",
		'fr-fr': "Kravarech",
		'es-es': "Dragalge",
		'it-it': "Dragalge",
		'pt-br': "Dragalge",
		'de-de': "Tandrak"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		691,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Point",
				'fr-fr': "Point Poison",
				'es-es': "Punto Tóxico",
				'it-it': "Velenopunto",
				'pt-br': "Ponto Venenoso",
				'de-de': "Giftdorn"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene avvelenato.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante será Envenenado.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'es-es': "Ciclón",
				'it-it': "Tornado",
				'pt-br': "Twister",
				'de-de': "Windhose"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, discard an Energy from your opponent’s Active Pokémon. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival. Si ambas son cruz, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente. Se as duas saírem coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Tales are told of ships that wander into seas where Dragalge live, never to return.",
	},

	thirdParty: {
		cardmarket: 355572,
		tcgplayer: 165703
	}
}

export default card
