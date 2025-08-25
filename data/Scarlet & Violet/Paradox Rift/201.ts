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

	rarity: "Illustration rare",
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
			en: "During your turn, if this Pokémon is on your Bench, whenever you attach an Energy card from your hand to this Pokémon, you may switch it with your Active Pokémon.",
			fr: "Pendant votre tour, si ce Pokémon est sur votre Banc, chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, vous pouvez l'échanger contre votre Pokémon Actif.",
			es: "Durante tu turno, si este Pokémon está en tu Banca, cada vez que unas una carta de Energía de tu mano a este Pokémon, puedes cambiarlo por tu Pokémon Activo.",
			it: "Durante il tuo turno, se questo Pokémon è nella tua panchina, ogni volta che assegni a questo Pokémon una carta Energia dalla tua mano, puoi scambiarlo con il tuo Pokémon attivo.",
			pt: "Durante o seu turno, se este Pokémon estiver no seu Banco, sempre que você ligar uma carta de Energia da sua mão a este Pokémon, você poderá trocá-lo pelo seu Pokémon Ativo.",
			de: "Während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es jedes Mal, wenn du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, gegen dein Aktives Pokémon austauschen."
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
			en: "This attack does 20 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "0313",

	thirdParty: {
		cardmarket: 740613
	}
}

export default card