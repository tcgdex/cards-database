import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		pt: "Glaceon",
		de: "Glaziola"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freeze Zone",
				fr: "Zone de Gel",
				es: "Congelar Zona",
				it: "Freddezza",
				pt: "Zona de Congelamento",
				de: "Frostzone"
			},
			effect: {
				en: "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.",
				fr: "Le coût de Retraite de chacun de vos Pokémon de la Team Plasma en jeu est diminué de ColorlessColorless.",
				es: "El Coste de Retirada de cada uno de tus Pokémon del Equipo Plasma en juego es de ColorlessColorless menos.",
				it: "Il costo di ritirata di ciascun Pokémon Team Plasma in gioco scende di ColorlessColorless.",
				pt: "O Custo para Recuar de cada um de seus Pokémon da Equipe Plasma em jogo será de Colorless Colorless a menos.",
				de: "Die Rückzugskosten all deiner Team Plasma-Pokémon im Spiel verringern sich um {C}{C}."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				de: "Eissturm"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It lowers its body heat to freeze its fur. The hairs then become like needles it can fire.",
		de: "Wenn es seine Körpertemperatur senkt, erstarren die Haare seines Fells zu Eis und dienen ihm als nadelartige Geschosse."
	},

	thirdParty: {
		cardmarket: 280901,
		tcgplayer: 85749
	}
}

export default card
