import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff",
		es: "Zangoose",
		it: "Zangoose",
		pt: "Zangoose",
		de: "Sengo"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Gale Claws",
			fr: "Tempête de Griffes",
			es: "Vendaval de Zarpas",
			it: "Raffica di Artigli",
			pt: "Garras de Vendaval",
			de: "Sturmklauen"
		},

		effect: {
			en: "If you played a Rapid Strike Supporter card from your hand during this turn, this attack also does 50 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous avez joué une carte Supporter Mille Poings de votre main pendant ce tour, cette attaque inflige aussi 50 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Si has jugado 1 carta de Partidario de Golpe Fluido de tu mano durante este turno, este ataque también hace 50 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se hai giocato una carta Aiuto Colpo Rapido dalla tua mano durante questo turno, questo attacco infligge anche 50 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Se você jogou 1 carta de Apoiador Golpe Fluido da sua mão durante este turno, este ataque também causará 50 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Wenn du 1 Fließender-Angriff-Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke auch 2 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Its fur would all stand on end if it smelled a Seviper nearby. Its sharp claws tear up its foes."
	}
}

export default card