import { Card } from "models/database/card";
import Set from "../151";

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'fr-fr': "Dracaufeu-ex",
		'en-us': "Charizard ex",
		'es-es': "Charizard ex",
		'it-it': "Charizard-ex",
		'pt-br': "Charizard ex",
		'de-de': "Glurak-ex",
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Reptincel",
		'en-us': "Charmeleon",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo",
	},
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				'fr-fr': "Aile de Bravoure",
				'en-us': "Brave Wing",
				'es-es': "Ala Osada",
				'it-it': "Ala Impavida",
				'pt-br': "Asa Intrépida",
				'de-de': "Tapfere Flügel",
			},

			effect: {
				'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
				'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
				'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			},

			damage: "60+",
		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],

			name: {
				'fr-fr': "Vortex Explosif",
				'en-us': "Explosive Vortex",
				'es-es': "Vórtice Explosivo",
				'it-it': "Vortice Esplosivo",
				'pt-br': "Vórtice Explosivo",
				'de-de': "Explosiver Wirbel",
			},

			effect: {
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'en-us': "Discard 3 Energy from this Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie da questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			},

			damage: 330,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733794,
				tcgplayer: 517045,
				cardtrader: 261377
			}
		},
	],

	suffix: "ex",
	illustrator: "miki kudo",

	
};

export default card;
