import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists."
	},

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		de: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		'es-mx': "Koraidon",
		pt: "Koraidon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Low Kick",
			fr: "Balayage",
			de: "Fußkick",
			es: "Patada Baja",
			it: "Colpo Basso",
			'es-mx': "Patada Baja",
			pt: "Rasteira"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			en: "Collision Course",
			fr: "Nitro Crash",
			de: "Kollisionskurs",
			es: "Nitrochoque",
			it: "Turboschianto",
			'es-mx': "Nitrochoque",
			pt: "Nitrocolisão"
		},

		effect: {
			en: "Discard 2 <span class=\"energy-symbol Fighting\" title=\"Fighting\">Fighting</span> Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies <span class=\"energy-symbol Fighting\" title=\"Combat\">Fighting</span> de ce Pokémon.",
			de: "Lege 2 <span class=\"energy-symbol Fighting\" title=\"Kampf\">Fighting</span>-Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías <span class=\"energy-symbol Fighting\" title=\"Lucha\">Fighting</span> de este Pokémon.",
			it: "Scarta due Energie <span class=\"energy-symbol Fighting\" title=\"Lotta\">Fighting</span> da questo Pokémon.",
			'es-mx': "Descarta 2 Energías <span class=\"energy-symbol Fighting\" title=\"Pelea\">Fighting</span> de este Pokémon.",
			pt: "Descarte 2 Energias Fighting deste Pokémon."
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907693,
				tcgplayer: 716482
			}
		}
	],
}

export default card
