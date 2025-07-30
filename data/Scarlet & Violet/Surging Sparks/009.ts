import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic",
		fr: "Lampignon",
		es: "Shiinotic",
		it: "Shiinotic",
		pt: "Shiinotic",
		de: "Lamellux"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Calming Light",
			fr: "Lumière Apaisante",
			es: "Luz Calmante",
			it: "Calmaluce",
			pt: "Luz Tranquilizadora",
			de: "Beruhigender Schein"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Asleep.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Dormido.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario addormentato.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Adormecido.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners einschlafen lassen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Spiral Rush",
			fr: "Course en Spirale",
			es: "Avalancha Espiral",
			it: "Raffica a Spirale",
			pt: "Arremetida Espiral",
			de: "Spiralsturmangriff"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Aya Kusube",

	thirdParty: {
		cardmarket: 794264
	}
}

export default card
