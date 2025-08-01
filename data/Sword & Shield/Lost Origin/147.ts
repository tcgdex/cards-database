import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Zoroark VSTAR",
		fr: "Zoroark de Hisui VSTAR",
		es: "Zoroark de Hisui V-ASTRO",
		it: "Zoroark di Hisui V ASTRO",
		pt: "Zoroark de Hisui V-ASTRO",
		de: "Hisui-Zoroark VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hisuian Zoroark V",
		fr: "Zoroark de Hisui-V",
		es: "Zoroark de Hisui V",
		it: "Zoroark di Hisui-V",
		pt: "Zoroark de Hisui V",
		de: "Hisui-Zoroark-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ticking Curse",
			fr: "Malédiction Imminente",
			es: "Maldición Inminente",
			it: "Maledizione a Orologeria",
			pt: "Tique-taque Amaldiçoado",
			de: "Tickender Fluch"
		},

		effect: {
			en: "This attack does 50 damage for each of your Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			it: "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
			de: "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670819
	}
}

export default card
