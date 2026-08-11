import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'fr-fr': "Démolosse",
		'en-us': "Houndoom",
		'es-es': "Houndoom",
		'it-it': "Houndoom",
		'pt-br': "Houndoom",
		'de-de': "Hundemon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Malosse",
		'en-us': "Houndour",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Frappe Audacieuse",
			'en-us': "Daring Strike",
			'es-es': "Golpe Intrépido",
			'it-it': "Colpo Temerario",
			'pt-br': "Golpe Ousado",
			'de-de': "Gewagter Angriff"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 70 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 70 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 70 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranche Ombre",
			'en-us': "Shadow Slash",
			'es-es': "Tajo Sombrío",
			'it-it': "Lacerombra",
			'pt-br': "Talho das Sombras",
			'de-de': "Schattenschlitzer"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'en-us': "Discard an Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "If you are burned by the flames it shoots from its mouth, the pain will never go away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725213,
				tcgplayer: 509893,
				cardtrader: 255818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725213,
				tcgplayer: 509893,
				cardtrader: 255818
			}
		},
	],

	illustrator: "Haru Akasaka",

	
}

export default card
