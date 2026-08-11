import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			es: "Patada",
			it: "Calcio",
			pt: "Chute",
			de: "Tritt"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			es: "Absorber",
			it: "Assorbimento",
			pt: "Absorção",
			de: "Absorber"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "Though it looks like Tentacool, Toedscool is a completely different species. Its legs may be thin, but it can run at a speed of 30 mph.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740492,
				tcgplayer: 523616,
				cardtrader: 265060
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740492,
				tcgplayer: 523616,
				cardtrader: 265060
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
