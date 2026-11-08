import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [842],
	set: Set,

	name: {
		'en-us': "Appletun",
		'fr-fr': "Dratatin",
		'es-es': "Appletun",
		'it-it': "Appletun",
		'pt-br': "Appletun",
		'de-de': "Schlapfel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Melting Sweetness",
			'fr-fr': "Nectar Liquéfiant",
			'es-es': "Dulzor Fundido",
			'it-it': "Dolcezza Disarmante",
			'pt-br': "Derretida Doce",
			'de-de': "Schmelzende Süße"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 50
	}, {
		cost: ["Grass", "Fire"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794513,
				tcgplayer: 589864
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794513,
				tcgplayer: 589864
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card
