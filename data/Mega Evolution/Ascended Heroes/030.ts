import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pignite",
		fr: "Grotichon",
		es: "Pignite",
		'es-mx': "Pignite",
		de: "Ferkokel",
		it: "Pignite",
		pt: "Pignite"
	},

	illustrator: "Aliya Chen",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [499],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Super Singe",
			fr: "Super Roussi",
			es: "Superquemadura",
			'es-mx': "Superquemadura",
			de: "Super-Versengung",
			it: "Super Scottata",
			pt: "Superchamuscada"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado."
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675842,
		cardmarket: 869641
	}
}

export default card