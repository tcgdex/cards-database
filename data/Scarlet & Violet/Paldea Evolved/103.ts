import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [958],
	set: Set,

	name: {
		fr: "Forgella",
		en: "Tinkatuff",
		es: "Tinkatuff",
		it: "Tinkatuff",
		pt: "Tinkatuff",
		de: "Tafforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Forgerette",
		en: "Tinkatink",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poing Léger",
			en: "Light Punch",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Puissance Illimitée",
			en: "Boundless Power",
			es: "Poder Ilimitado",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado",
			de: "Unbegrenzte Kraft"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715578,
				tcgplayer: 497518,
				cardtrader: 248732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715578,
				tcgplayer: 497518,
				cardtrader: 248732
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		en: "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",
	},
}

export default card
