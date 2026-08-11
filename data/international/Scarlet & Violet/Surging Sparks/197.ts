import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		'en-us': "Ceruledge",
		'fr-fr': "Malvalame",
		'es-es': "Ceruledge",
		'it-it': "Ceruledge",
		'pt-br': "Ceruledge",
		'de-de': "Azugladis"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cursed Edge",
			'fr-fr': "Lame Maudite",
			'es-es': "Filo Maldito",
			'it-it': "Lama Maledetta",
			'pt-br': "Gume Amaldiçoado",
			'de-de': "Fluchklinge"
		},

		effect: {
			'en-us': "Discard all Special Energy from all of your opponent's Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies spéciales de tous les Pokémon de votre adversaire.",
			'es-es': "Descarta todas las Energías Especiales de todos los Pokémon de tu rival.",
			'it-it': "Scarta tutte le Energie speciali dai Pokémon del tuo avversario.",
			'pt-br': "Descarte todas as Energias Especiais de todos os Pokémon do seu oponente.",
			'de-de': "Lege alle Spezial-Energien von allen Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Black Blaze Slash",
			'fr-fr': "Tranche Brasier Sombre",
			'es-es': "Tajo Ígneo Oscuro",
			'it-it': "Lacerafiamma Nera",
			'pt-br': "Talho de Chamas Negras",
			'de-de': "Schwarzfeuerstich"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794570,
				tcgplayer: 589891
			}
		},
	],

	illustrator: "Rond",

}

export default card
