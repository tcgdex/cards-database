import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Ho-Oh-EX",
		fr: "Ho-Oh-EX",
		es: "Ho-Oh-EX",
		it: "Ho-Oh-EX",
		pt: "Ho-Oh-EX",
		de: "Ho-Oh-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 160,
	types: [
		"Fire",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rebirth",
				fr: "Renaissance",
				es: "Renacimiento",
				it: "Rinascita",
				pt: "Ressurreição",
				de: "Comeback"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may flip a coin. If heads, put this Pokémon onto your Bench and attach 3 different types of basic Energy cards from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez lancer une pièce. Si c’est face, placez ce Pokémon sur votre Banc et attachez 3 différents types de cartes Énergie de base de votre pile de défausse à ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes lanzar una moneda. Si sale cara, pon este Pokémon en tu Banca y une 3 tipos diferentes de cartas de Energía Básica de tu pila de descartes a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi lanciare una moneta. Se esce testa, metti questo Pokémon nella tua panchina e assegnagli dalla tua pila degli scarti tre carte Energia base di tipo diverso.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em sua pilha de descarte, você poderá jogar uma moeda. Se sair cara, coloque esse Pokémon no seu Banco e ligue 3 tipos diferentes de cards de Energia básica da sua pilha de descarte a esse Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen, wenn sich dieses Pokémon in deinem Ablagestapel befindet. Lege dieses Pokémon bei „Kopf“ auf deine Bank und lege 3 vom Typ her unterschiedliche Basis-Energiekarten von deinem Ablagestapel an dieses Pokémon an."
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
				en: "Rainbow Burn",
				fr: "Brûlure Arc-en-ciel",
			},
			effect: {
				en: "Does 20 more damage for each different type of basic Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
