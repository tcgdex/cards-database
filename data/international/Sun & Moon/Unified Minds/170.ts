import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflèmit",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Counterattack",
				'fr-fr': "Contre-Attaque",
				'es-es': "Contragolpe",
				'it-it': "Respinta",
				'pt-br': "Contra-Atacante",
				'de-de': "Gegenangriff"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 2 contadores de danos no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dynamic Swing",
				'fr-fr': "Retour Dynamique",
				'es-es': "Sacudida Dinámica",
				'it-it': "Dinamisberla",
				'pt-br': "Gancho Dinâmico",
				'de-de': "Dynamischer Schwinger"
			},
			effect: {
				'en-us': "You may do 100 more damage. If you do, during your opponent’s next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Puedes hacer 100 puntos de daño más. Si lo haces, durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño más a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Puoi infliggere 100 danni in più. Se lo fai, durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante a próxima vez de jogar do seu oponente, este Pokémon receberá 100 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, werden diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken 100 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The world's laziest Pokémon. It moves to another spot when there's no food left within its reach.",
	},

	thirdParty: {
		cardmarket: 388637,
		tcgplayer: 195170
	}
}

export default card
