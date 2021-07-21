import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 90,
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
				en: "Dazzle Dance",
				fr: "Danse Éblouissante",
				es: "Danza Deslumbrante",
				it: "Accecadanza",
				pt: "Dança Fascinante",
				de: "Verwirrender Tanz"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mysterious Dance",
				fr: "Danse Mystérieuse",
				es: "Danza Misteriosa",
				it: "Danza Misteriosa",
				pt: "Dança Misteriosa",
				de: "Geheimnisvoller Tanz"
			},
			effect: {
				en: "For each of your opponent’s Benched Pokémon, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				fr: "Pour chaque Pokémon de Banc de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				es: "Por cada uno de los Pokémon en Banca de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Per ogni Pokémon nella panchina del tuo avversario, metti a piacimento un segnalino danno sui suoi Pokémon.",
				pt: "Para cada um dos Pokémon no Banco do seu oponente, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege für jedes Pokémon auf der Bank deines Gegners 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
