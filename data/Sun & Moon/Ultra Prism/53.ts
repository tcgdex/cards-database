import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lightless World",
				fr: "Monde Obscur",
				es: "Mundo sin Luz",
				it: "Mondo Buio",
				pt: "Mundo sem Luz",
				de: "Lichtlose Welt"
			},
			effect: {
				en: "Put 2 Supporter cards from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Supporter de votre pile de défausse à votre main.",
				es: "Pon 2 cartas de Partidario de tu pila de descartes en tu mano.",
				it: "Prendi due carte Aiuto dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 cartas de Apoiador da sua pilha de descarte na sua mão.",
				de: "Nimm 2 Unterstützerkarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Terrify",
				fr: "Terrifier",
				es: "Aterrorizar",
				it: "Terrorizzare",
				pt: "Aterrorizar",
				de: "Erschrecken"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
