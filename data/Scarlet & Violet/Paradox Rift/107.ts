import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Slither Wing",
		fr: "Rampe-Ailes",
		es: "Reptalada",
		it: "Alirasenti",
		pt: "Asa Rasteira",
		de: "Kriechflügel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stomp Off",
			fr: "Tohu-Bohu",
			es: "Pisotear",
			it: "Pestatura",
			pt: "Sair Irritado",
			de: "Davonstapfen"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Burning Turbulence",
			fr: "Turbulence Enflammée",
			es: "Turbulencia Abrasadora",
			it: "Turbolenza Infuocata",
			pt: "Turbulência Quente",
			de: "Feuerturbulenzen"
		},

		effect: {
			en: "This Pokémon also does 90 damage to itself. Your opponent's Active Pokémon is now Burned.",
			fr: "Ce Pokémon s'inflige aussi 90 dégâts. Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Este Pokémon también se hace 90 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Questo Pokémon infligge anche 90 danni a se stesso. Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Este Pokémon também causa 90 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Anesaki Dynamic"
}

export default card