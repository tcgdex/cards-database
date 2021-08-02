import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Top Entry",
				fr: "Tombé de Haut",
				es: "Entrada Superior",
				it: "Primacima",
				pt: "Entrada Superior",
				de: "Einzug"
			},
			effect: {
				en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn’t full, before you put it into your hand, you may put it onto your Bench.",
				fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc.",
				es: "Una vez durante tu turno, si has robado este Pokémon de tu baraja al principio de tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca.",
				it: "Una sola volta durante il tuo turno, se hai pescato questo Pokémon dal tuo mazzo all’inizio del tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina.",
				pt: "Uma vez durante o seu turno, se você tiver comprado este Pokémon do seu baralho no começo do seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco.",
				de: "Einmal während deines Zuges, wenn du zu Beginn deines Zuges dieses Pokémon von deinem Deck gezogen hast und deine Bank nicht voll ist, bevor du es auf deine Hand nimmst, kannst du es auf deine Bank legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Reignite",
				fr: "Rallumer",
				es: "Reavivar",
				it: "Ravvivare",
				pt: "Reacender",
				de: "Neu entfachen"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez à l’un de vos Pokémon une carte Énergie Fire de votre pile de défausse.",
				es: "Une 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
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

	retreat: 1,
	hp: 80,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
