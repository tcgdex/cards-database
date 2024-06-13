import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [342],
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		es: "Crawdaunt",
		it: "Crawdaunt",
		pt: "Crawdaunt",
		de: "Krebutack"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Snip Snip",
			fr: "Couic Couic",
			es: "Cortecitos",
			it: "Zac Zac",
			pt: "Corta e Recorta",
			de: "Schnipp-Schnipp"
		},

		effect: {
			en: "Flip 2 coins. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Lanza 2 monedas. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Jogue 2 moedas. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
			de: "Wirf 2 Münzen. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Rampaging Hammer",
			fr: "Marteau Furieux",
			es: "Martillazo Furioso",
			it: "Martello Infuriato",
			pt: "Martelo Furioso",
			de: "Tobender Hammer"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card