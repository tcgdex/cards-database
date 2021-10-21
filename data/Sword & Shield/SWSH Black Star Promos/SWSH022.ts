import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple",
		fr: "Pomdrapi",
		es: "Flapple",
		it: "Flapple",
		pt: "Flapple",
		de: "Drapfel"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Applin",
		fr: "Verpom"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Apple Drop",
			fr: "Chute de Pommes",
			es: "Caída de Manzanas",
			it: "Caduta Mele",
			pt: "Apple Drop",
			de: "Apfelfall"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous avez placé des marqueurs de dégâts de cette façon, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival. Si has puesto algún contador de daño de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario. Se hai messo dei segnalini danno in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du auf diese Weise Schadensmarken platziert hast, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Acid Spray",
			fr: "Bombe Acide",
			es: "Bomba Ácida",
			it: "Acidobomba",
			pt: "Acid Spray",
			de: "Säurespeier"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It ate a sour apple, and that induced its evolution. In its cheeks, it stores an acid capable of causing chemical burns."
	},

	stage: "Stage1",
	dexId: [841],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
