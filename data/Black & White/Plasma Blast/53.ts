import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Archen",
		fr: "Arkéapti",
		es: "Archen",
		it: "Archen",
		pt: "Archen",
		de: "Flapteryx"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		566,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prehistoric Call",
				fr: "Appel Préhistorique",
				es: "Llamada Prehistórica",
				it: "Chiamata Preistorica",
				pt: "Chamado Pre-histórico",
				de: "Prähistorischer Ruf"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en la parte inferior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo in fondo al tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você pode colocá-lo na base de seu baralho.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon in deinem Ablagestapel befindet, dieses Pokémon unter dein Deck legen."
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
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It was revived from an ancient fossil. Not able to fly, it lived in treetops and hopped from one branch to another.",
		fr: "Un Pokémon recréé à partir d'un fossile. Il vit à la cime des arbres, mais ne peut voler et saute de branche en branche.",
		es: "Ha renacido a partir de fósiles antiguos. Vive en la copa de los árboles y salta de una rama a otra porque no puede volar.",
		it: "Rigenerato da un fossile, viveva sugli alberi e rincorreva le prede saltando di ramo in ramo perché non sapeva volare.",
		pt: "Ele foi revivido a partir de um antigo fóssil. Incapaz de voar, viveu no topo de árvores, pulando de galho em galho.",
		de: "Es wurde aus einem Fossil reanimiert. Da es nicht fliegen kann, bewegt es sich hüpfend von Ast zu Ast."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 281074,
				tcgplayer: 83608
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 281074,
				tcgplayer: 83608
			}
		}
	]
}

export default card
