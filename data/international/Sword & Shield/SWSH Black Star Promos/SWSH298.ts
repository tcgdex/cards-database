import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'fr-fr': "Zoroark de Hisui VSTAR",
		'de-de': "Hisui-Zoroark VSTAR",
		'es-es': "Zoroark de Hisui V-ASTRO",
		'pt-br': "Zoroark de Hisui V-ASTRO",
		'it-it': "Zoroark di Hisui V ASTRO",
		'en-us': "Hisuian Zoroark VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Zoroark de Hisui-V",
		'de-de': "Hisui-Zoroark-V",
		'es-es': "Zoroark de Hisui V",
		'pt-br': "Zoroark de Hisui V",
		'it-it': "Zoroark di Hisui-V",
		'en-us': "Hisuian Zoroark V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Malédiction Imminente",
			'de-de': "Tickender Fluch",
			'es-es': "Maldición Inminente",
			'pt-br': "Tique-taque Amaldiçoado",
			'it-it': "Maledizione a Orologeria",
			'en-us': "Ticking Curse"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
			'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			'en-us': "This attack does 50 damage for each of your Pokémon that has any damage counters on it."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 671765
	}
}

export default card
