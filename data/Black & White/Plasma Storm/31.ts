import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		it: "Ludicolo",
		pt: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rain Dish",
				fr: "Cuvette",
				es: "Cura Lluvia",
				it: "Copripioggia",
				pt: "Prato de Chuva",
				de: "Regengenuss"
			},
			effect: {
				en: "At any time between turns, heal 20 damage from this Pokémon.",
				fr: "N’importe quand entre chaque tour, soignez 20 dégâts à ce Pokémon.",
				es: "En cualquier momento entre turnos, cura 20 puntos de daño a este Pokémon.",
				it: "Tra un turno e l’altro, in qualsiasi momento, cura questo Pokémon da 20 danni.",
				pt: "A qualquer momento entre as vezes de jogar, cure 20 de danos deste Pokémon.",
				de: "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 20 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Groovy Dance",
				fr: "Danse Enivrée",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Confused.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280771,
		tcgplayer: 86901
	}
}

export default card
