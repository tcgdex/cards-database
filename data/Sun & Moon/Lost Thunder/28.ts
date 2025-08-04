import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		es: "Dustox",
		it: "Dustox",
		pt: "Dustox",
		de: "Pudox"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hazardous Evolution",
				fr: "Évolution Risquée",
				es: "Evolución Peligrosa",
				it: "Evoluzione Insidiosa",
				pt: "Evolução Perigosa",
				de: "Bedrohliche Entwicklung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent’s Active Pokémon Paralyzed and Poisoned. If you do, put 3 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné et Paralysé. Dans ce cas, placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Envenenado y Paralizado. Si lo haces, pon 3 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario paralizzato e avvelenato. Se lo fai, tra un turno e l’altro metti tre segnalini danno invece di uno su quel Pokémon.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Envenenado e Paralisado. Se fizer isto, coloque 3 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners paralysieren und vergiften. Wenn du das machst, lege zwischen den Zügen 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
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
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365667,
		tcgplayer: 178829
	}
}

export default card
