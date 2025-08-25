import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Salvage",
				fr: "Trouvaille",
				es: "Rescatar",
				it: "Ritrovamento",
				pt: "Resgatar",
				de: "Freilegen"
			},
			effect: {
				en: "Shuffle 4 Item cards from your discard pile into your deck.",
				fr: "Mélangez 4 cartes Objet de votre pile de défausse avec votre deck.",
				es: "Pon 4 cartas de Objeto de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Rimischia quattro carte Strumento dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 4 cartas de Item da sua pilha de descarte no seu baralho.",
				de: "Mische 4 Itemkarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
				es: "Doble Rayo",
				it: "Segnoraggio",
				pt: "Feixe Sinalizador",
				de: "Ampelleuchte"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365712,
		tcgplayer: 178883
	}
}

export default card
