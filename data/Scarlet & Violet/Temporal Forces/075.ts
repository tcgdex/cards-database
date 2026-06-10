import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [742],
	set: Set,

	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mini Drain",
			fr: "Mini-Assèchement",
			es: "Minidrenaje",
			it: "Miniassorbimento",
			pt: "Minidreno",
			de: "Minisauger"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "Nectar and pollen are its favorite fare. You can find Cutiefly hovering around Gossifleur, trying to get some of Gossifleur's pollen.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760705,
				tcgplayer: 542819
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760705,
				tcgplayer: 542819
			}
		},
	],
	
	illustrator: "Sekio",

}

export default card