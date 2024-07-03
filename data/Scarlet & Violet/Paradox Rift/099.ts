import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [774],
	set: Set,

	name: {
		en: "Minior",
		fr: "Météno",
		es: "Minior",
		it: "Minior",
		pt: "Minior",
		de: "Meteno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Far-Flying Meteor",
			fr: "Météore Projeté",
			es: "Meteoro Lanzado",
			it: "Meteora Volavia",
			pt: "Meteoro de Voo Longínquo",
			de: "Weit fliegender Meteor"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, when you attach an Energy card from your hand to this Pokémon, you may switch it with your Active Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, lorsque vous attachez une carte Énergie de votre main à ce Pokémon, vous pouvez l'échanger contre votre Pokémon Actif.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, cuando unas una carta de Energía de tu mano a este Pokémon, puedes cambiarlo por tu Pokémon Activo.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, quando assegni a questo Pokémon una carta Energia dalla tua mano, puoi scambiarlo con il tuo Pokémon attivo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, quando você ligar uma carta de Energia da sua mão a este Pokémon, você poderá trocá-lo pelo seu Pokémon Ativo.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet und du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du es gegen dein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gravitational Tackle",
			fr: "Charge Gravitationnelle",
			es: "Placaje Gravitacional",
			it: "Azione Gravitazionale",
			pt: "Investida Gravitacional",
			de: "Gravitations-Tackle"
		},

		effect: {
			en: "This attack does 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card