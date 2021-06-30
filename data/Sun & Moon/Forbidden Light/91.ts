import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		704,
	],
	hp: 40,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sticky Membrane",
				fr: "Membrane Gluante",
				es: "Membrana Pegajosa",
				it: "Membrana Viscosa",
				pt: "Membrana Grudenta",
				de: "Klebrige Membrane"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Pokémon’s attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de votre adversaire coûtent Colorless de plus.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques de los Pokémon de tu rival cuestan Colorless más.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi dei Pokémon del tuo avversario costano Colorless in più.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques dos Pokémon do seu oponente custam Colorless a mais.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, erhöhen sich die Kosten der Attacken der Pokémon deines Gegners um Colorless."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
