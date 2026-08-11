import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [717],

	name: {
		'en-us': "Yveltal ex",
		'fr-fr': "Yveltal-ex",
		'es-es': "Yveltal ex",
		'es-mx': "Yveltal ex",
		'de-de': "Yveltal-ex",
		'it-it': "Yveltal-ex",
		'pt-br': "Yveltal ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Soul Destroyer",
			'fr-fr': "Destructeur d'Âmes",
			'es-es': "Destructor de Almas",
			'es-mx': "Destructor de Almas",
			'de-de': "Seelenvernichter",
			'it-it': "Distruggianima",
			'pt-br': "Destruidor de Almas"
		},

		effect: {
			'en-us': "Knock Out each of your opponent's Pokémon that has 50 HP or less remaining.",
			'fr-fr': "Mettez K.O. chacun des Pokémon de votre adversaire auxquels il reste 50 PV ou moins.",
			'es-es': "Deja Fuera de Combate a cada uno de los Pokémon de tu rival a los que les queden 50 PS o menos.",
			'es-mx': "Deja Fuera de Combate a cada uno de los Pokémon de tu rival a los que les queden 50 PS o menos.",
			'de-de': "Mache jedes Pokémon deines Gegners, das 50 oder weniger verbleibende KP hat, kampfunfähig.",
			'it-it': "Metti KO ciascuno dei Pokémon del tuo avversario che ha 50 PS o meno rimanenti.",
			'pt-br': "Nocauteie cada um dos Pokémon do seu oponente que tiver PS restante de 50 ou menos."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Dark Strike",
			'fr-fr': "Frappe Ténébreuse",
			'es-es': "Golpe Siniestro",
			'es-mx': "Impacto Oscuro",
			'de-de': "Finsterschlag",
			'it-it': "Colpo Ombra",
			'pt-br': "Golpe de Escuridão"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Dark Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Ténébreuse.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Siniestro.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Impacto Oscuro.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Finsterschlag nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Ombra.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Escuridão."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684387,
				cardmarket: 877522
			}
		}
	],

}

export default card
