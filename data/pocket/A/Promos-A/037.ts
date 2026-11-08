import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cresselia ex",
		'fr-fr': "Cresselia-ex",
		'es-es': "Cresselia ex",
		'it-it': "Cresselia-ex",
		'de-de': "Cresselia-ex",
		'pt-br': "Cresselia ex",
		'ko-kr': "크레세리아 ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",

	dexId: [488],
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lunar Plumage",
			'fr-fr': "Plumage Lunaire",
			'es-es': "Plumaje Lunar",
			'it-it': "Piumaggio Lunare",
			'de-de': "Lunargefieder",
			'pt-br': "Plumagem Lunar",
			'ko-kr': "초승달의 날개옷"
		},

		effect: {
			'en-us': "Whenever you attach a {P} Energy from your Energy Zone to this Pokémon, heal 20 damage from this Pokémon.",
			'fr-fr': "Chaque fois que vous attachez une Énergie {P} de votre zone Énergie à ce Pokémon, soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cada vez que unas una Energía {P} de tu área de Energía a este Pokémon, cúrale 20 puntos de daño.",
			'it-it': "Ogni volta che assegni un'Energia {P} a questo Pokémon dalla tua Zona Energia, curalo da 20 danni.",
			'de-de': "Heile jedes Mal, wenn du 1 {P}-Energie aus dem Energiebereich an dieses Pokémon anlegst, 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Sempre que você ligar uma Energia {P} da sua Zona de Energia a este Pokémon, cure 20 pontos de dano deste Pokémon.",
			'ko-kr': "자신의 에너지존에서 이 포켓몬에게 {P}에너지를 붙일 때마다 이 포켓몬의 HP를 20회복."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psychic Flash",
			'fr-fr': "Flash Psy",
			'es-es': "Destello Psíquico",
			'it-it': "Psicoflash",
			'de-de': "Psycho-Blitz",
			'pt-br': "Clarão Psíquico",
			'ko-kr': "사이코플래시"
		},

		damage: 80,
		cost: ["Psychic", "Psychic", "Colorless"],
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol4"]
}

export default card
