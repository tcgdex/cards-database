import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
		es: "Gourgeist",
		it: "Gourgeist",
		pt: "Gourgeist",
		de: "Pumpdjinn"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		711,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		it: "Pumpkaboo",
		pt: "Pumpkaboo",
		de: "Irrbis"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Eerie Voice",
				fr: "Voix Lugubre",
				es: "Voz Espeluznante",
				it: "Vocemistero",
				pt: "Voz Misteriosa",
				de: "Schaurige Stimme"
			},
			effect: {
				en: "Put 2 damage counters on each of your opponent's Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur chaque Pokémon de votre adversaire.",
				es: "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
				it: "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				pt: "Coloque 2 contadores de danos em cada um dos Pokémon do seu oponente.",
				de: "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Spirit Scream",
				fr: "Cri de l'Âme",
				es: "Grito Espectral",
				it: "Urlospettrale",
				pt: "Grito Espiritual",
				de: "Seelenschrei"
			},
			effect: {
				en: "Put damage counters on both Active Pokémon until the remaining HP of each Pokémon is 10.",
				fr: "Placez des marqueurs de dégâts sur les deux Pokémon Actifs jusqu'à ce que chaque Pokémon ait 10 PV.",
				es: "Pon contadores de daño en ambos Pokémon Activos hasta que le queden 10 PS restantes a cada Pokémon.",
				it: "Metti dei segnalini danno su entrambi i Pokémon attivi finché i loro PS rimanenti diventano 10.",
				pt: "Coloque contadores de danos em ambos os Pokémon Ativos até o PS restante de cada Pokémon ser 10.",
				de: "Lege so lang Schadensmarken auf beide Aktiven Pokémon, bis noch 10 KP beim jeweiligen Pokémon übrig sind."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 281394
	}
}

export default card
