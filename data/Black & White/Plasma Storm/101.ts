import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Block",
				fr: "Barrage",
				es: "Bloqueo",
				it: "Blocco",
				pt: "Bloquear",
				de: "Rückentzug"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon can’t retreat.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, el Pokémon Activo de tu rival no puede retirarse.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il Pokémon attivo del tuo avversario non può ritirarsi.",
				pt: "Desde que este Pokémon seja seu Pokémon Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Teampact",
				fr: "Teampact",
			},
			effect: {
				en: "Does 30 damage times the number of Team Plasma Pokémon you have in play.",
				fr: "Inflige 30 dégâts multipliés par le nombre de Pokémon de la Team Plasma que vous avez en jeu.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280841
	}
}

export default card
