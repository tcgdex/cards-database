import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Hisuian Zoroark VSTAR",
		'fr-fr': "Zoroark de Hisui VSTAR",
		'es-es': "Zoroark de Hisui V-ASTRO",
		'it-it': "Zoroark di Hisui V ASTRO",
		'pt-br': "Zoroark de Hisui V-ASTRO",
		'de-de': "Hisui-Zoroark VSTAR"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Hisuian Zoroark V",
		'fr-fr': "Zoroark de Hisui-V",
		'es-es': "Zoroark de Hisui V",
		'it-it': "Zoroark di Hisui-V",
		'pt-br': "Zoroark de Hisui V",
		'de-de': "Hisui-Zoroark-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ticking Curse",
			'fr-fr': "Malédiction Imminente",
			'es-es': "Maldición Inminente",
			'it-it': "Maledizione a Orologeria",
			'pt-br': "Tique-taque Amaldiçoado",
			'de-de': "Tickender Fluch"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your Pokémon that has any damage counters on it.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 674219,
				tcgplayer: 284168
			}
		},
	],
}

export default card
