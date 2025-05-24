import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		fr: "Feunard",
		en: "Ninetales",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Feu Follet",
			en: "Will-O-Wisp",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			de: "Irrlicht"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Danse des Neuf Queues",
			en: "Nine-Tailed Dance",
			es: "Baile de Nueve Colas",
			it: "Danza a Nove Code",
			pt: "Dança de Nove Caudas",
			de: "Neunschweifiger Tanz"
		},

		effect: {
			fr: "Placez 9 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "Put 9 damage counters on 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack.",
			es: "Pon 9 contadores de daño en uno de los Pokémon de tu rival. Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Metti nove segnalini danno su uno dei Pokémon del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Coloque 9 contadores de dano em 1 dos Pokémon do seu oponente. Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Lege 9 Schadensmarken auf 1 Pokémon deines Gegners. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "SIE NANAHARA"
}

export default card