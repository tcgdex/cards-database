import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [569],

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trash Cyclone",
				fr: "Cyclone Immonde",
				es: "Ciclón Basura",
				it: "Ciclone Immondo",
				pt: "Ciclone de Lixo",
				de: "Müllwirbel"
			},
			effect: {
				en: "This attack does 30 damage for each Pokémon Tool card in your discard pile. Then, shuffle those cards into your deck.",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
				es: "Este ataque hace 30 puntos de daño por cada carta de Herramienta Pokémon en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
				it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
				pt: "Este ataque causa 30 pontos de dano para cada carta de Ferramenta Pokémon na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
				de: "Diese Attacke fügt für jede Pokémon-Ausrüstung in deinem Ablagestapel 30 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
			},
			damage: "30×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Spray",
				fr: "Pulvérisation Toxique",
				es: "Aerosol Venenoso",
				it: "Spruzzo Velenoso",
				pt: "Spray de Veneno",
				de: "Giftspray"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	thirdParty: {
		cardmarket: 512265
	}
}

export default card
