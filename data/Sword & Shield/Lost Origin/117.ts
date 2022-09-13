import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Message",
			fr: "Message Maudit",
			es: "Mensaje Maldito",
			it: "Messaggio Maledetto",
			pt: "Mensagem Amaldiçoada",
			de: "Verfluchte Botschaft"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Chain of Spirits",
			fr: "Esprits en Chaîne",
			es: "Cadena de Espíritus",
			it: "Catena di Spiriti",
			pt: "Corrente de Espíritos",
			de: "Geisterkette"
		},

		effect: {
			en: "This attack does 60 more damage for each Spiritomb in your discard pile.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Spiritomb dans votre pile de défausse.",
			es: "Este ataque hace 60 puntos de daño más por cada Spiritomb en tu pila de descartes.",
			it: "Questo attacco infligge 60 danni in più per ogni Spiritomb nella tua pila degli scarti.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada Spiritomb na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes Kryppuk in deinem Ablagestapel 60 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card