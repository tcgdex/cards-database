import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Escaping Incisors",
				fr: "Incisives Fugueuses",
				es: "Incisivos Huidizos",
				it: "Incisivi di Fuga",
				pt: "Incisivos Fugitivos",
				de: "Fluchtzähne"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, scambia questo Pokémon con uno della tua panchina.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372430,
		tcgplayer: 189244
	}
}

export default card
