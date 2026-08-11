import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poisonous Nest",
				'fr-fr': "Nid Empoisonné",
				'es-es': "Nido Venenoso",
				'it-it': "Velenonido",
				'pt-br': "Ninho Venenoso",
				'de-de': "Giftiges Nest"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this Ability. Both Active Pokémon (except for Grass Pokémon) are now Poisoned.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Les deux Pokémon Actifs (à part les Pokémon Grass) sont maintenant Empoisonnés.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes usar esta habilidad. Ambos Pokémon Activos (excepto los Pokémon Grass) pasan a estar Envenenados.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi usare questa abilità. Entrambi i Pokémon attivi (a eccezione dei Pokémon Grass) vengono avvelenati.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode usar essa Habilidade. Ambos os Pokémon Ativos (exceto o Pokémon Grass) estão agora Envenenados.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), kannst du diese Fähigkeit einsetzen. Beide Aktiven Pokémon (außer Grass-Pokémon) sind jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Impound",
				'fr-fr': "Confiscation",
				'es-es': "Confiscar",
				'it-it': "Isolamento",
				'pt-br': "Apreensão",
				'de-de': "Festsetzen"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

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
		'en-us': "It attaches silk to its prey and sets it free. Later, it tracks the silk to the prey and its friends.",
	},

	thirdParty: {
		cardmarket: 284187,
		tcgplayer: 101455
	}
}

export default card
