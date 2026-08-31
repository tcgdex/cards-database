import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		de: "Pudox"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [269],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Dust",
				fr: "Poussière protectrice",
				de: "Schützender Staub"
			},
			effect: {
				en: "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon.",
				fr: "Prévenez tous les effets d'attaques, excepté les dégâts, infligés à Papinox par le Pokémon Attaquant.",
				de: "Verhindere alle Effekte von Angriffen außer Schaden, die Pudox von dem Angreifenden Pokémon zugefügt werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
				de: "Toxin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez deux marqueurs de dégât sur le Pokémon Défenseur entre les deux tours.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Windstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275654,
				tcgplayer: 85056
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275654,
				tcgplayer: 85056
			}
		},
	],

}

export default card
