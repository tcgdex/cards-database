import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Mighty Magnetism",
			'fr-fr': "Magnétisme Puissant",
			'es-es': "Magnetismo Poderoso",
			'it-it': "Magnetismo Poderoso",
			'pt-br': "Magnetismo Magnífico",
			'de-de': "Mächtiger Magnetismus"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 80
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Zap Cannon",
			'fr-fr': "Élecanon",
			'es-es': "Electrocañón",
			'it-it': "Elettrocannone",
			'pt-br': "Canhão Zap",
			'de-de': "Blitzkanone"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Zap Cannon.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Élecanon.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Electrocañón.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Elettrocannone.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Zap.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Blitzkanone nicht einsetzen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794336,
				tcgplayer: 589994
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794336,
				tcgplayer: 589994
			}
		},
	],

	illustrator: "Po-Suzuki",
	
}

export default card
