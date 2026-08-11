import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [320],
	set: Set,

	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			es: "Siesta",
			it: "Pausa",
			pt: "Soneca",
			de: "Nickerchen"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		en: "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691748,
				tcgplayer: 478130
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691748,
				tcgplayer: 478130
			}
		},
	],
}

export default card
