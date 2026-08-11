import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona",
		'it-it': "Ninetales",
		'es-es': "Ninetales",
		'pt-br': "Ninetales",
		'es-mx': "Ninetales"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix",
		'it-it': "Vulpix",
		'es-es': "Vulpix",
		'pt-br': "Vulpix",
		'es-mx': "Vulpix"
	},
	stage: "Stage1",
	dexId: [38],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Supernatural Shapeshifter",
			'fr-fr': "Polymorphe Surnaturel",
			'de-de': "Übernatürlicher Gestaltwandler",
			'it-it': "Mutaforma Soprannaturale",
			'es-es': "Transformación Sobrenatural",
			'pt-br': "Metamorfo Sobrenatural",
			'es-mx': "Transformación Sobrenatural"
		},

		effect: {
			'en-us': "Discard the top card of your deck, and if that card is a Supporter card, use the effect of that card as the effect of this attack.",
			'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte est une carte Supporter, utilisez l'effet de cette carte en tant qu'effet de cette attaque.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel, und wenn jene Karte eine Unterstützerkarte ist, setze den Effekt jener Karte als Effekt dieser Attacke ein.",
			'it-it': "Scarta la prima carta del tuo mazzo e, se quella carta è una carta Aiuto, usa l'effetto di quella carta come effetto di questo attacco.",
			'es-es': "Descarta la primera carta de tu baraja y, si es una carta de Partidario, usa el efecto de esa carta como efecto de este ataque.",
			'pt-br': "Descarte a carta de cima do seu baralho e, se aquela carta for uma carta de Apoiador, use o efeito daquela carta como o efeito deste ataque.",
			'es-mx': "Descarta la primera carta de tu mazo y, si es una carta de Partidario, usa el efecto de esa carta como efecto de este ataque."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'es-mx': "Combustión"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851091,
				tcgplayer: 654359
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851091,
				tcgplayer: 654359
			}
		},
	],
}

export default card
