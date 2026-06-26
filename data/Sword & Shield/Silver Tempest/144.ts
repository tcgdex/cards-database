import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Try Bouncing",
			fr: "Bond d'Essai",
			es: "Prueba Rebote",
			it: "Balzoprova",
			pt: "Tentativa Saltitante",
			de: "Hüpfversuch"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "If both of Buneary's ears are rolled up, something is wrong with its body or mind. It's a sure sign the Pokémon is in need of care.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682191,
				tcgplayer: 451794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682191,
				tcgplayer: 451794
			}
		},
	],
}

export default card
