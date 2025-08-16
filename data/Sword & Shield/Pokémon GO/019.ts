import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hold Still",
			fr: "Ne Bougez Pas",
			es: "Permanecer Inmóvil",
			it: "Immobile",
			pt: "Ficar Parado",
			de: "Stillhalten"
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
		cost: ["Water"],

		name: {
			en: "Ideal Fishing Day",
			fr: "Bonne Pêche",
			es: "Día de Pesca Perfecto",
			it: "Giornata Pescosa",
			pt: "Dia de Pesca Perfeito",
			de: "Idealer Tag zum Angeln"
		},

		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664556,
		tcgplayer: 276949
	}
}

export default card