import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Hop's Zacian ex",
		'fr-fr': "Zacian-ex de Nabil",
		'es-es': "Zacian ex de Paul",
		'de-de': "Hops Zacian-ex",
		'it-it': "Zacian-ex di Hop",
		'pt-br': "Zacian ex do Lupo",
		'es-mx': "Zacian ex de Paul"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Insta-Strike",
			'fr-fr': "Instanta-Frappe",
			'es-es': "Instagolpe",
			'de-de': "Sofortschlag",
			'it-it': "Colpo Istantaneo",
			'pt-br': "Golpe Instantâneo",
			'es-mx': "Golpe Instantáneo"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Brave Slash",
			'fr-fr': "Tranche Vaillante",
			'es-es': "Tajo Osado",
			'de-de': "Couragierter Schlitzer",
			'it-it': "Lacerazione Impavida",
			'pt-br': "Talho Impávido",
			'es-mx': "Corte Valiente"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Brave Slash.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tranche Vaillante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tajo Osado.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Couragierter Schlitzer nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerazione Impavida.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Talho Impávido.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Corte Valiente."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",
	suffix: "ex",
	illustrator: "DOM",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817339,
				tcgplayer: 623613
			}
		},
	],
}

export default card
