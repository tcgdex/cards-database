import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Delphox V",
		fr: "Goupelin V",
		es: "Delphox V",
		it: "Delphox V",
		pt: "Delphox V",
		de: "Fennexis V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Eerie Glow",
			fr: "Lueur Sinistre",
			es: "Resplandor Sobrecogedor",
			it: "Lucemistero",
			pt: "Brilho Misterioso",
			de: "Gruselglühen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Magical Fire",
			fr: "Feu Magique",
			es: "Fuego Mágico",
			it: "Fuoco Magico",
			pt: "Fogo Mágico",
			de: "Magisches Feuer"
		},

		effect: {
			en: "Put 2 Energy attached to this Pokémon in the Lost Zone. This attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Placez 2 Énergies attachées à ce Pokémon dans la Zone Perdue. Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Pon 2 Energías unidas a este Pokémon en la Zona Perdida. Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Prendi due Energie assegnate a questo Pokémon e mettile nell'area perduta. Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Coloque 2 Energias ligadas a este Pokémon na Zona Perdida. Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege 2 an dieses Pokémon angelegte Energien ins Nirgendwo. Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card