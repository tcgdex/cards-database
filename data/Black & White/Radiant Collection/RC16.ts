import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Yveltal",
		es: "Yveltal",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
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
				es: "Ala Mortífera",
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				es: "Une 1 carta de Energía Darkness de tu pila de descartes a 1 de tus Pokémon en Banca.",
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
				es: "Cuchillada Oscuridad",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
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

	description: {
		en: "Hidden away in its jet-black wings is a red passion.",
		es: "Oculta entre sus alas azabaches hay una roja pasión.",
	},

	thirdParty: {
		tcgplayer: 113758
	}
}

export default card
