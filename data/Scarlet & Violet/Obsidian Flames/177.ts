import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [735],
	set: Set,

	name: {
		fr: "Argouste",
		en: "Gumshoos",
		es: "Gumshoos",
		it: "Gumshoos",
		pt: "Gumshoos",
		de: "Manguspektor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		fr: "Manglouton",
		en: "Yungoos",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Frappe de Tête",
			en: "Headbang",
			es: "Cabecear",
			it: "Scuotitesta",
			pt: "Baque de Cabeça",
			de: "Headbangen"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Mâchouille",
			en: "Crunch",
			es: "Triturar",
			it: "Sgranocchio",
			pt: "Mastigada",
			de: "Knirscher"
		},

		effect: {
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "Discard an Energy from your opponent's Active Pokémon.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "Once it finds signs of prey, it will patiently stake out the location, waiting until the sun goes down.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725257,
				tcgplayer: 509730,
				cardtrader: 256073
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725257,
				tcgplayer: 509730,
				cardtrader: 256073
			}
		},
	],

	illustrator: "Eri Yamaki",

	
}

export default card
