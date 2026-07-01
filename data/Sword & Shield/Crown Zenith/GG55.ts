import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		en: "Regigigas VSTAR",
		fr: "Regigigas VSTAR",
		es: "Regigigas V-ASTRO",
		it: "Regigigas V ASTRO",
		pt: "Regigigas V-ASTRO",
		de: "Regigigas VSTAR"
	},

	illustrator: "Aya Kusube",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		en: "Regigigas V",
		fr: "Regigigas-V",
		es: "Regigigas V",
		it: "Regigigas-V",
		pt: "Regigigas V",
		de: "Regigigas-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691935,
				tcgplayer: 478083
			}
		},
	],
}

export default card
