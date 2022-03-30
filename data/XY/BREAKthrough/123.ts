import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Second Coat",
				fr: "Seconde Couche",
				es: "Segunda Mano",
				it: "Secondamano",
				pt: "Segunda Camada",
				de: "Zweiter Anstrich"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch a basic Energy card attached to your Active Pokémon with a different type of basic Energy card from your discard pile.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger une carte Énergie de base attachée à votre Pokémon Actif avec un différent type de carte Énergie de base de votre pile de défausse.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar 1 carta de Energía Básica unida a tu Pokémon Activo por 1 carta de Energía Básica de tipo diferente de tu pila de descartes.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare una carta Energia base assegnata al tuo Pokémon attivo con una carta Energia base di tipo diverso dalla tua pila degli scarti.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá trocar um card de Energia básica ligado ao seu Pokémon Ativo por um de tipo diferente de Energia básica da sua pilha de descarte.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 an dein Aktives Pokémon angelegte Basis-Energiekarte mit einer vom Typ her unterschiedlichen Basis-Energiekarte aus deinem Ablagestapel austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
