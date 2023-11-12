import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Absol-ex",
		en: "Absol ex",
		es: "Absol ex",
		it: "Absol-ex",
		pt: "Absol ex",
		de: "Absol-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Prescience",
			en: "Future Sight",
			es: "Premonición",
			it: "Divinazione",
			pt: "Visão do Futuro",
			de: "Seher"
		},

		effect: {
			fr: "Regardez les 3 cartes du dessus du deck de l'un des joueurs, puis replacez-les dans l'ordre de votre choix.",
			en: "Look at the top 3 cards of either player's deck and put them back in any order.",
			es: "Mira las 3 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
			it: "Guarda le prime tre carte del mazzo di uno dei giocatori e rimettile a posto nell'ordine che preferisci.",
			pt: "Olhe as 3 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
			de: "Schau dir die obersten 3 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Frappe Maudite",
			en: "Cursed Slug",
			es: "Puñetazo Maldito",
			it: "Pugno Maledetto",
			pt: "Murro Amaldiçoado",
			de: "Verfluchter Schlag"
		},

		effect: {
			fr: "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your opponent has 3 or fewer cards in their hand, this attack does 120 more damage.",
			es: "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más.",
			it: "Se il tuo avversario ha tre o meno carte in mano, questo attacco infligge 120 danni in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas na mão dele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card