import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		de: "Piepi",
		it: "Clefairy",
		pt: "Clefairy"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		35
	],
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Follow Me",
				fr: "Par Ici",
				es: "Señuelo",
				de: "Spotlight",
				it: "Sonoqui",
				pt: "Isca-viva"
			},
			effect: {
				en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
				fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
				de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
				it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
				pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
			}
		},
		{
			cost: [
				"Psychic",
				"Psychic"
			],
			name: {
				en: "Flop",
				fr: "Flop",
				es: "Vuelta",
				de: "Plumps",
				it: "Tonfo",
				pt: "Baque"
			},
			damage: "30"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Natsumi Yoshida",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684414,
		cardmarket: 877444
	}
}

export default card
