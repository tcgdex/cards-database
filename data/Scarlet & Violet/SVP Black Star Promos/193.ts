import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Zacian ex",
		fr: "Zacian-ex de Nabil",
		de: "Hops Zacian-ex",
		es: "Zacian ex de Paul",
		it: "Zacian-ex di Hop",
		pt: "Zacian ex do Lupo"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Insta-Strike",
			fr: "Instanta-Frappe",
			de: "Sofortschlag",
			es: "Instagolpe",
			it: "Colpo Istantaneo",
			pt: "Golpe Instantâneo"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Brave Slash",
			fr: "Tranche Vaillante",
			de: "Couragierter Schlitzer",
			es: "Tajo Osado",
			it: "Lacerazione Impavida",
			pt: "Talho Impávido"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Brave Slash.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tranche Vaillante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Couragierter Schlitzer nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Tajo Osado.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerazione Impavida.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Talho Impávido."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card