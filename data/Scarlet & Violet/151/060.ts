import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [60],
	set: Set,

	name: {
		fr: "Ptitard",
		en: "Poliwag",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Écume",
			en: "Bubble",
			es: "Burbuja",
			it: "Bolla",
			pt: "Bolha",
			de: "Blubber"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "In rivers with fast-flowing water, this Pokémon will cling to a rock by using its thick lips, which act like a suction cup.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733655,
				tcgplayer: 516249,
				cardtrader: 261141
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733655,
				tcgplayer: 516249,
				cardtrader: 261141
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
