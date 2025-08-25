import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
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
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poisonous Nest",
				fr: "Nid Empoisonné",
				es: "Nido Venenoso",
				it: "Velenonido",
				pt: "Ninho Venenoso",
				de: "Giftiges Nest"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. Both Active Pokémon (except for Grass Pokémon) are now Poisoned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Les deux Pokémon Actifs (à part les Pokémon Grass) sont maintenant Empoisonnés.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes usar esta habilidad. Ambos Pokémon Activos (excepto los Pokémon Grass) pasan a estar Envenenados.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi usare questa abilità. Entrambi i Pokémon attivi (a eccezione dei Pokémon Grass) vengono avvelenati.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode usar essa Habilidade. Ambos os Pokémon Ativos (exceto o Pokémon Grass) estão agora Envenenados.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du diese Fähigkeit einsetzen. Beide Aktiven Pokémon (außer Grass-Pokémon) sind jetzt vergiftet."
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
				en: "Impound",
				fr: "Confiscation",
				es: "Confiscar",
				it: "Isolamento",
				pt: "Apreensão",
				de: "Festsetzen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	thirdParty: {
		cardmarket: 284187,
		tcgplayer: 101455
	}
}

export default card
