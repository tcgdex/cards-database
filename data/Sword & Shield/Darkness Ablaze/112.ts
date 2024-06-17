import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [827],
	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tail Whip",
				fr: "Mimi-Queue",
				es: "Látigo",
				it: "Colpocoda",
				pt: "Cauda Chicote",
				de: "Rutenschlag"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
				es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
				de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains."
	}
}

export default card
