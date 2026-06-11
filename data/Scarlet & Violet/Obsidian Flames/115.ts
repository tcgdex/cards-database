import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [740],
	set: Set,

	name: {
		fr: "Crabominable",
		en: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Crabagarre",
		en: "Crabrawler",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Confrontation",
			en: "Confront",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Coup d'Articulations",
			en: "Knuckle Impact",
			es: "Impacto Nudillo",
			it: "Impatto Nocche",
			pt: "Impacto Ossudo",
			de: "Knöchelprall"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		en: "The detached pincers of these Pokémon are delicious. Some Trainers bring Lechonk into the mountains just to search for them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725195,
				tcgplayer: 509842,
				cardtrader: 255800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725195,
				tcgplayer: 509842,
				cardtrader: 255800
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
