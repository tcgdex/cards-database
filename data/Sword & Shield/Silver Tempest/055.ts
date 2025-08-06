import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [618],
	set: Set,

	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Mystery Bolt",
			fr: "Éclair Mystère",
			es: "Chispazo Misterioso",
			it: "Fulmine Mistero",
			pt: "Relâmpago Misterioso",
			de: "Geheimnisvoller Blitz"
		},

		effect: {
			en: "You can use this attack only if you have no Supporter cards in your discard pile. This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous ne pouvez utiliser cette attaque que si vous n'avez pas de carte Supporter dans votre pile de défausse. Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Puedes usar este ataque solo si no tienes ninguna carta de Partidario en tu pila de descartes. Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Puoi usare questo attacco solo se non hai carte Aiuto nella tua pila degli scarti. Questo attacco infligge 100 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Você só pode usar este ataque se não tiver cartas de Apoiador na sua pilha de descarte. Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Du kannst diese Attacke nur einsetzen, wenn du keine Unterstützerkarten in deinem Ablagestapel hast. Diese Attacke fügt 1 Pokémon deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682102,
		tcgplayer: 451711
	}
}

export default card