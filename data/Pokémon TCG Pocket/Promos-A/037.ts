import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia ex",
		fr: "Cresselia-ex",
		es: "Cresselia ex",
		it: "Cresselia-ex",
		de: "Cresselia-ex",
		'pt-br': "Cresselia ex",
		ko: "크레세리아 ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lunar Plumage",
			fr: "Plumage Lunaire",
			es: "Plumaje Lunar",
			it: "Piumaggio Lunare",
			de: "Lunargefieder",
			'pt-br': "Plumagem Lunar",
			ko: "초승달의 날개옷"
		},

		effect: {
			en: "Whenever you attach a {P} Energy from your Energy Zone to this Pokémon, heal 20 damage from this Pokémon.",
			fr: "Chaque fois que vous attachez une Énergie {P} de votre zone Énergie à ce Pokémon, soignez 20 dégâts de ce Pokémon.",
			es: "Cada vez que unas una Energía {P} de tu área de Energía a este Pokémon, cúrale 20 puntos de daño.",
			it: "Ogni volta che assegni un'Energia {P} a questo Pokémon dalla tua Zona Energia, curalo da 20 danni.",
			de: "Heile jedes Mal, wenn du 1 {P}-Energie aus dem Energiebereich an dieses Pokémon anlegst, 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Sempre que você ligar uma Energia {P} da sua Zona de Energia a este Pokémon, cure 20 pontos de dano deste Pokémon.",
			ko: "자신의 에너지존에서 이 포켓몬에게 {P}에너지를 붙일 때마다 이 포켓몬의 HP를 20회복."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic Flash",
			fr: "Flash Psy",
			es: "Destello Psíquico",
			it: "Psicoflash",
			de: "Psycho-Blitz",
			'pt-br': "Clarão Psíquico",
			ko: "사이코플래시"
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
