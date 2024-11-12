import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Mighty Magnetism",
			fr: "Magnétisme Puissant",
			es: "Magnetismo Poderoso",
			it: "Magnetismo Poderoso",
			pt: "Magnetismo Magnífico",
			de: "Mächtiger Magnetismus"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 80
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Zap Cannon",
			fr: "Élecanon",
			es: "Electrocañón",
			it: "Elettrocannone",
			pt: "Canhão Zap",
			de: "Blitzkanone"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Zap Cannon.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Élecanon.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Electrocañón.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Elettrocannone.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Zap.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Blitzkanone nicht einsetzen."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card