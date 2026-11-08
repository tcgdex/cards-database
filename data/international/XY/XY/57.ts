import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Gourgeist",
		'fr-fr': "Banshitrouye",
		'es-es': "Gourgeist",
		'it-it': "Gourgeist",
		'pt-br': "Gourgeist",
		'de-de': "Pumpdjinn"
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
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Eerie Voice",
				'fr-fr': "Voix Lugubre",
				'es-es': "Voz Espeluznante",
				'it-it': "Vocemistero",
				'pt-br': "Voz Misteriosa",
				'de-de': "Schaurige Stimme"
			},
			effect: {
				'en-us': "Put 2 damage counters on each of your opponent's Pokémon.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur chaque Pokémon de votre adversaire.",
				'es-es': "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
				'it-it': "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 2 contadores de danos em cada um dos Pokémon do seu oponente.",
				'de-de': "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Spirit Scream",
				'fr-fr': "Cri de l'Âme",
				'es-es': "Grito Espectral",
				'it-it': "Urlospettrale",
				'pt-br': "Grito Espiritual",
				'de-de': "Seelenschrei"
			},
			effect: {
				'en-us': "Put damage counters on both Active Pokémon until the remaining HP of each Pokémon is 10.",
				'fr-fr': "Placez des marqueurs de dégâts sur les deux Pokémon Actifs jusqu'à ce que chaque Pokémon ait 10 PV.",
				'es-es': "Pon contadores de daño en ambos Pokémon Activos hasta que le queden 10 PS restantes a cada Pokémon.",
				'it-it': "Metti dei segnalini danno su entrambi i Pokémon attivi finché i loro PS rimanenti diventano 10.",
				'pt-br': "Coloque contadores de danos em ambos os Pokémon Ativos até o PS restante de cada Pokémon ser 10.",
				'de-de': "Lege so lang Schadensmarken auf beide Aktiven Pokémon, bis noch 10 KP beim jeweiligen Pokémon übrig sind."
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

	description: {
		'en-us': "Singing in eerie voices, they wander town streets on the night of the new moon. Anyone who hears their song is cursed.",
	},

	thirdParty: {
		cardmarket: 281394,
		tcgplayer: 85860
	}
}

export default card
