import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [675],
	set: Set,

	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'de-de': "Pandagro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'es-mx': "Pangoro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'de-de': "Pam-Pam",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'es-mx': "Pancham"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Torment",
			'fr-fr': "Tourmente",
			'es-es': "Tormento",
			'de-de': "Folterknecht",
			'it-it': "Attaccalite",
			'pt-br': "Atormentar",
			'es-mx': "Tormento"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Power Tackle",
			'fr-fr': "Tacle Puissant",
			'es-es': "Placaje Poderoso",
			'de-de': "Kraft-Tackle",
			'it-it': "Forzazione",
			'pt-br': "Investida Poderosa",
			'es-mx': "Tacleada Poderosa"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "nagimiso",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817251,
				tcgplayer: 623526
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817251,
				tcgplayer: 623526
			}
		},
	],
}

export default card
