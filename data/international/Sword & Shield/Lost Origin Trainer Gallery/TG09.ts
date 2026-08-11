import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Message",
			'fr-fr': "Message Maudit",
			'es-es': "Mensaje Maldito",
			'it-it': "Messaggio Maledetto",
			'pt-br': "Mensagem Amaldiçoada",
			'de-de': "Verfluchte Botschaft"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Chain of Spirits",
			'fr-fr': "Esprits en Chaîne",
			'es-es': "Cadena de Espíritus",
			'it-it': "Catena di Spiriti",
			'pt-br': "Corrente de Espíritos",
			'de-de': "Geisterkette"
		},

		effect: {
			'en-us': "This attack does 60 more damage for each Spiritomb in your discard pile.",
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque Spiritomb dans votre pile de défausse.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada Spiritomb en tu pila de descartes.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni Spiritomb nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada Spiritomb na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Kryppuk in deinem Ablagestapel 60 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674229,
				tcgplayer: 284269
			}
		},
	],
}

export default card
