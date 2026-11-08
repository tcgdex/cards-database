import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		'fr-fr': "Absol-ex",
		'en-us': "Absol ex",
		'es-es': "Absol ex",
		'it-it': "Absol-ex",
		'pt-br': "Absol ex",
		'de-de': "Absol-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Prescience",
			'en-us': "Future Sight",
			'es-es': "Premonición",
			'it-it': "Divinazione",
			'pt-br': "Visão do Futuro",
			'de-de': "Seher"
		},

		effect: {
			'fr-fr': "Regardez les 3 cartes du dessus du deck de l'un des joueurs, puis replacez-les dans l'ordre de votre choix.",
			'en-us': "Look at the top 3 cards of either player's deck and put them back in any order.",
			'es-es': "Mira las 3 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
			'it-it': "Guarda le prime tre carte del mazzo di uno dei giocatori e rimettile a posto nell'ordine che preferisci.",
			'pt-br': "Olhe as 3 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
			'de-de': "Schau dir die obersten 3 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Frappe Maudite",
			'en-us': "Cursed Slug",
			'es-es': "Puñetazo Maldito",
			'it-it': "Pugno Maledetto",
			'pt-br': "Murro Amaldiçoado",
			'de-de': "Verfluchter Schlag"
		},

		effect: {
			'fr-fr': "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your opponent has 3 or fewer cards in their hand, this attack does 120 more damage.",
			'es-es': "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il tuo avversario ha tre o meno carte in mano, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas na mão dele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725215,
				tcgplayer: 509898,
				cardtrader: 255820
			}
		},
	],

	suffix: "ex",
	illustrator: "Nisota Niso",

	
}

export default card
