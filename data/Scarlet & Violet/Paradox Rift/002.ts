import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [284],
	set: Set,

	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Daunting Eyes",
			fr: "Regard Intimidant",
			es: "Ojos Intimidantes",
			it: "Occhi Minacciosi",
			pt: "Olhos Aterrorizantes",
			de: "Einschüchternde Augen"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, shuffle an Energy attached to your opponent's Active Pokémon into their deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, mélangez une Énergie attachée au Pokémon Actif de votre adversaire avec son deck.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, pon 1 Energía unida al Pokémon Activo de tu rival en su baraja y barájala.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, rimischia un'Energia assegnata al Pokémon attivo del tuo avversario nel suo mazzo.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, embaralhe uma Energia ligada ao Pokémon Ativo do seu oponente no baralho dele.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Mische pro Kopf 1 an das Aktive Pokémon deines Gegners angelegte Energie in sein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card