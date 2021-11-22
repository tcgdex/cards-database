import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Trevenant BREAK",
		fr: "Desséliande TURBO",
		es: "Trevenant TURBO",
		it: "Trevenant TURBO",
		pt: "Trevenant TURBO",
		de: "Trombork-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Silent Fear",
				fr: "Peur Silencieuse",
				es: "Temor Silencioso",
				it: "Timormuto",
				pt: "Temor Silencioso",
				de: "Stille Angst"
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
				es: "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival.",
				it: "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de danos em cada um dos Pokémon do seu oponente.",
				de: "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners."
			},

		}
	],

	retreat: 0
}

export default card
