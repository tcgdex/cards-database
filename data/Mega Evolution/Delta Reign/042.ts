import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		de: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon",
		'es-mx': "Miraidon"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			de: "Klauenschlitzer",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			'es-mx': "Cuchillada con Garra"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			en: "Flashing Bolt",
			fr: "Éclair Aveuglant",
			de: "Leuchtblitz",
			es: "Rayo Destellante",
			it: "Bolide Abbagliante",
			pt: "Raio Piscante",
			'es-mx': "Rayo Destellante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flashing Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Aveuglant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Leuchtblitz nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Raio Piscante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728022,
				cardmarket: 918859
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728022,
				cardmarket: 918859
			}
		}
	],
}

export default card