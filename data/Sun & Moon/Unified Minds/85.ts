import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		pt: "Azelf",
		de: "Tobutz"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
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
				en: "Psypower",
				fr: "Puissance Psy",
				es: "Psicopoder",
				it: "Psicotere",
				pt: "Poder Psíquico",
				de: "Psy-Power"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
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

	thirdParty: {
		cardmarket: 388232
	}
}

export default card
