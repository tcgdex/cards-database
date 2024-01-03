import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Sepiatroce",
		en: "Malamar",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Vue Psy",
			en: "Psychic Insight",
			es: "Intuición Psíquica",
			it: "Psicointuito",
			pt: "Percepção Psíquica",
			de: "Psycho-Einsicht"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder la carte du dessus du deck de votre adversaire. Dans ce cas, regardez la carte du dessus de votre deck.",
			en: "Once during your turn, you may look at the top card of your opponent's deck. If you do, look at the top card of your deck.",
			es: "Una vez durante tu turno, puedes mirar la primera carta de la baraja de tu rival. Si lo haces, mira la primera carta de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi guardare la prima carta del mazzo del tuo avversario. Se lo fai, guarda la prima carta del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá olhar a carta de cima do baralho do seu oponente. Se fizer isto, olhe a carta de cima do seu baralho.",
			de: "Einmal während deines Zuges kannst du dir die oberste Karte des Decks deines Gegners anschauen. Wenn du das machst, schau dir die oberste Karte deines Decks an."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Onde Hypnotique",
			en: "Hypnotic Ray",
			es: "Rayo Hipnótico",
			it: "Ipnoraggio",
			pt: "Raio Hipnótico",
			de: "Hypnotischer Strahl"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card