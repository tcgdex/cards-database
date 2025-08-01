import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Fog",
				fr: "Brouillard Sinistre",
				es: "Niebla Siniestra",
				it: "Bruma Sinistra",
				pt: "Névoa Sinistra",
				de: "Nebel des Grauens"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent’s Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez un marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 1 contador de daño en cada uno de los Pokémon en Banca de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti un segnalino danno su ciascuno dei Pokémon nella panchina del tuo avversario.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 1 contador de dano em cada um dos Pokémon no Banco do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},

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

	retreat: 1,

	thirdParty: {
		cardmarket: 372357
	}
}

export default card
