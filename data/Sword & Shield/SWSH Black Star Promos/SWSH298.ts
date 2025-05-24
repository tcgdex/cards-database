import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Zoroark de Hisui VSTAR",
		de: "Hisui-Zoroark VSTAR",
		es: "Zoroark de Hisui V-ASTRO",
		pt: "Zoroark de Hisui V-ASTRO",
		it: "Zoroark di Hisui V ASTRO",
		en: "Hisuian Zoroark VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Zoroark de Hisui-V",
		de: "Hisui-Zoroark-V",
		es: "Zoroark de Hisui V",
		pt: "Zoroark de Hisui V",
		it: "Zoroark di Hisui-V",
		en: "Hisuian Zoroark V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Malédiction Imminente",
			de: "Tickender Fluch",
			es: "Maldición Inminente",
			pt: "Tique-taque Amaldiçoado",
			it: "Maledizione a Orologeria",
			en: "Ticking Curse"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			de: "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu.",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
			it: "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			en: "This attack does 50 damage for each of your Pokémon that has any damage counters on it."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card