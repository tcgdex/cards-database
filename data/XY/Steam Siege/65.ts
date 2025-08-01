import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Oblivion Wing",
				fr: "Mort-Ailes",
				es: "Ala Mortífera",
				it: "Ali del Fato",
				pt: "Asa do Esquecimento",
				de: "Unheilsschwingen"
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Darkness de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia Darkness da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Darkness-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Blade",
				fr: "Lame Obscure",
				es: "Cuchillada Oscuridad",
				it: "Oscurolama",
				pt: "Lâmina Sombria",
				de: "Finsterklinge"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
				it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Jogue uma moeda. Se sair coroa, este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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

	thirdParty: {
		cardmarket: 291480
	}
}

export default card
