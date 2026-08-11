import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		es: "Qwilfish",
		it: "Qwilfish",
		pt: "Qwilfish",
		de: "Baldorfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			es: "Coleccionar",
			pt: "Coleta",
			it: "Tassa"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			pt: "Compre 1 carta.",
			it: "Pesca una carta."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			de: "Stachelstich",
			es: "Picotazo Púas",
			pt: "Ferroada de Espinhos",
			it: "Aculeopuntura"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582194,
				tcgplayer: 253192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582194,
				tcgplayer: 253192
			}
		},
	],
}

export default card
