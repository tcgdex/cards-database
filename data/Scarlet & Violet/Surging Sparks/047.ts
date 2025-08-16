import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Call Sign",
			fr: "Signe d'Appel",
			es: "Señal de Llamada",
			it: "Chiamata",
			pt: "Sinal de Chamada",
			de: "Rufzeichen"
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
			es: "Rayo Hielo",
			it: "Geloraggio",
			pt: "Raio Congelante",
			de: "Eisstrahl"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "sui"
}

export default card
