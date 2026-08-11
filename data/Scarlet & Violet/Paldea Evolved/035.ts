import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Trou d'Mémoire",
			en: "Spacing Out",
			es: "En las Nubes",
			it: "Vuoto Mentale",
			pt: "Sonhando Acordado",
			de: "Dahindöser"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts de ce Pokémon.",
			en: "Flip a coin. If heads, heal 30 damage from this Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, cura 30 puntos de daño a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, cura questo Pokémon da 30 danni.",
			pt: "Jogue uma moeda. Se sair cara, cure 30 pontos de dano deste Pokémon.",
			de: "Wirf 1 Münze. Heile bei Kopf 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Flamboiement",
			en: "Flare",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715509,
				tcgplayer: 497446,
				cardtrader: 248620
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715509,
				tcgplayer: 497446,
				cardtrader: 248620
			}
		},
	],

	illustrator: "ryoma uratsuka",

	description: {
		en: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
}

export default card
