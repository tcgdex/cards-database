import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails."
	},

	name: {
		en: "Murkrow",
		fr: "Cornèbre",
		de: "Kramurx",
		es: "Murkrow",
		it: "Murkrow",
		'es-mx': "Murkrow"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Clumsily Clutch",
			fr: "Prise Pataude",
			de: "Ungeschickter Griff",
			es: "Agarre Torpe",
			it: "Stretta Maldestra",
			'es-mx': "Enganche Torpe"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Wirf 1 Münze. Bei Kopf kann sich das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht zurückziehen.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907700,
				tcgplayer: 716486
			}
		}
	],
}

export default card