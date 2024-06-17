import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Sleep Pulse",
			fr: "Pouls Dodo",
			es: "Pulso Soñoliento",
			it: "Sonnopulsar",
			pt: "Pulso Sonolento",
			de: "Schlafimpuls"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
			de: "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind."
	}
}

export default card
