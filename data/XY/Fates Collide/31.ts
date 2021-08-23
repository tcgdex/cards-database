import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		pt: "Grumpig",
		de: "Groink"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Head Walking",
				fr: "Slammeur",
				es: "Salto al Público",
				it: "Pestalatesta",
				pt: "Saltar na Plateia",
				de: "Kopflauf"
			},
			effect: {
				en: "Put a Basic Pokémon from your opponent’s discard pile onto his or her Bench. Then, put 3 damage counters on that Pokémon.",
				fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc. Ensuite, placez 3 marqueurs de dégâts sur le Pokémon.",
				es: "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca. Después, pon 3 contadores de daño en ese Pokémon.",
				it: "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina. Poi, metti tre segnalini danno su quel Pokémon.",
				pt: "Coloque um Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a). Em seguida, coloque 3 contadores de danos naquele Pokémon.",
				de: "Nimm 1 Basis-Pokémon aus dem Ablagestapel deines Gegners und lege es auf seine Bank. Lege anschließend 3 Schadensmarken auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Knock Back",
				fr: "Dégagement",
				es: "Devolver Noqueo",
				it: "Allontanato",
				pt: "Jogar de Volta",
				de: "Schlag versetzen"
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
