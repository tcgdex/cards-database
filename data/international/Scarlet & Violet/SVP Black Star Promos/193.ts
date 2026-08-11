import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Hop's Zacian ex",
		'fr-fr': "Zacian-ex de Nabil",
		'de-de': "Hops Zacian-ex",
		'es-es': "Zacian ex de Paul",
		'it-it': "Zacian-ex di Hop",
		'pt-br': "Zacian ex do Lupo"
	},

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Insta-Strike",
			'fr-fr': "Instanta-Frappe",
			'de-de': "Sofortschlag",
			'es-es': "Instagolpe",
			'it-it': "Colpo Istantaneo",
			'pt-br': "Golpe Instantâneo"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Brave Slash",
			'fr-fr': "Tranche Vaillante",
			'de-de': "Couragierter Schlitzer",
			'es-es': "Tajo Osado",
			'it-it': "Lacerazione Impavida",
			'pt-br': "Talho Impávido"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Brave Slash.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tranche Vaillante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Couragierter Schlitzer nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tajo Osado.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerazione Impavida.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Talho Impávido."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 819265,
				tcgplayer: 625631
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 819345,
				tcgplayer: 625633
			}
		}
	],
}

export default card
