import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [612],
	set: Set,

	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bring Down the Axe",
			fr: "Hachèvement",
			es: "Hundir el Hacha",
			it: "Scure Fatale",
			pt: "Descer o Machado",
			de: "Fallbeil"
		},

		effect: {
			en: "If your opponent's Active Pokémon has any Special Energy attached, it is Knocked Out.",
			fr: "Si au moins une Énergie spéciale est attachée au Pokémon Actif de votre adversaire, il est mis K.O.",
			es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida, queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, ele será Nocauteado.",
			de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, ist es kampfunfähig."
		}
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			pt: "Pulso do Dragão",
			de: "Drachenpuls"
		},

		effect: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
			es: "Descarta las 3 primeras cartas de tu baraja.",
			it: "Scarta le prime tre carte del tuo mazzo.",
			pt: "Descarte as 3 cartas de cima do seu baralho.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Tsuyoshi Nagano"
}

export default card
