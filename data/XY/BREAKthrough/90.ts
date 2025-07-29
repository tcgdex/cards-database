import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
	],

	hp: 60,

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
				en: "Whiny Voice",
				fr: "Voix Suppliante",
				es: "Voz Quejica",
				it: "Moine",
				pt: "Voz Chorosa",
				de: "Jammerstimme"
			},
			effect: {
				en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha um card aleatório da mão do seu oponente. Seu oponente revela aquele card e o embaralha de volta no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Edge",
				fr: "Lame Obscurité",
				es: "Filo Siniestro",
				it: "Lama Oscura",
				pt: "Gume Sombrio",
				de: "Dunkelklinge"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286335
	}
}

export default card
