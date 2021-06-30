import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
		es: "Ninjask",
		it: "Ninjask",
		pt: "Ninjask",
		de: "Ninjask"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Molting",
				fr: "Renouvellement",
				es: "Muda",
				it: "Metamorfosi",
				pt: "Ecdise",
				de: "Häuten"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Shedinja from your discard pile onto your Bench.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer un Munja de votre pile de défausse sur votre Banc.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 Shedinja de tu pila de descartes en tu Banca.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere uno Shedinja dalla tua pila degli scarti e metterlo in panchina.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 1 Shedinja da sua pilha de descarte no seu Banco.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Ninjatom aus deinem Ablagestapel auf deine Bank legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
