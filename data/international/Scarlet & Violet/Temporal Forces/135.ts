import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [521],
	set: Set,

	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Opposing Winds",
			'fr-fr': "Vents Contraires",
			'es-es': "Vientos Adversos",
			'it-it': "Venti Avversi",
			'pt-br': "Ventos Opostos",
			'de-de': "Widerstreitende Winde"
		},

		effect: {
			'en-us': "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
			'es-es': "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			'it-it': "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			'pt-br': "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele.",
			'de-de': "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
		},

		damage: 70
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'es-es': "Poder Ilimitado",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado",
			'de-de': "Unbegrenzte Kraft"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
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
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "Unfezant are exceptional fliers. The females are known for their stamina, while the males outclass them in terms of speed.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760765,
				tcgplayer: 542879
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760765,
				tcgplayer: 542879
			}
		},
	],

	illustrator: "Anesaki Dynamic",

}

export default card