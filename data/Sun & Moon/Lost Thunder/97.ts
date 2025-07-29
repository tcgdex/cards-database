import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		es: "Giratina",
		it: "Giratina",
		pt: "Giratina",
		de: "Giratina"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Distortion Door",
				fr: "Porte Distorsion",
				es: "Puerta Distorsión",
				it: "Portale Distorto",
				pt: "Porta da Distorção",
				de: "Zerrtür"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 1 damage counter on 2 of your opponent’s Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez un marqueur de dégâts sur 2 des Pokémon de Banc de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Si lo haces, pon 1 contador de daño en 2 de los Pokémon en Banca de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo nella tua panchina. Se lo fai, metti un segnalino danno su due dei Pokémon in panchina del tuo avversario.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Se fizer isto, coloque 1 contador de dano em 2 dos Pokémon no Banco do seu oponente.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon in deinem Ablagestapel befindet, kannst du es auf deine Bank legen. Wenn du das machst, lege 1 Schadensmarke auf 2 Pokémon auf der Bank deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Impact",
				fr: "Impact Lugubre",
				es: "Impacto Sombra",
				it: "Impatto Ombra",
				pt: "Impacto Sombrio",
				de: "Schatteneinschlag"
			},
			effect: {
				en: "Put 4 damage counters on 1 of your Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
				es: "Pon 4 contadores de daño en 1 de tus Pokémon.",
				it: "Metti quattro segnalini danno su uno dei tuoi Pokémon.",
				pt: "Coloque 4 contadores de dano em 1 dos seus Pokémon.",
				de: "Lege 4 Schadensmarken auf 1 deiner Pokémon."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 365734
	}
}

export default card
