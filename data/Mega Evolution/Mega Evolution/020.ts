import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona",
		it: "Ninetales",
		es: "Ninetales",
		pt: "Ninetales",
		'es-mx': "Ninetales"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Supernatural Shapeshifter",
			fr: "Polymorphe Surnaturel",
			de: "Übernatürlicher Gestaltwandler",
			it: "Mutaforma Soprannaturale",
			es: "Transformación Sobrenatural",
			pt: "Metamorfo Sobrenatural",
			'es-mx': "Transformación Sobrenatural"
		},

		effect: {
			en: "Discard the top card of your deck, and if that card is a Supporter card, use the effect of that card as the effect of this attack.",
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte est une carte Supporter, utilisez l'effet de cette carte en tant qu'effet de cette attaque.",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel, und wenn jene Karte eine Unterstützerkarte ist, setze den Effekt jener Karte als Effekt dieser Attacke ein.",
			it: "Scarta la prima carta del tuo mazzo e, se quella carta è una carta Aiuto, usa l'effetto di quella carta come effetto di questo attacco.",
			es: "Descarta la primera carta de tu baraja y, si es una carta de Partidario, usa el efecto de esa carta como efecto de este ataque.",
			pt: "Descarte a carta de cima do seu baralho e, se aquela carta for uma carta de Apoiador, use o efeito daquela carta como o efeito deste ataque.",
			'es-mx': "Descarta la primera carta de tu mazo y, si es una carta de Partidario, usa el efecto de esa carta como efecto de este ataque."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654359
	}
}

export default card