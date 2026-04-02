import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		'es-mx': "Ariados",
		de: "Ariados",
		it: "Ariados",
		pt: "Ariados"
	},

	illustrator: "svlt",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poison Ring",
			fr: "Anneau de Poison",
			es: "Anillo Venenoso",
			'es-mx': "Anillo Venenoso",
			de: "Giftring",
			it: "Velenanello",
			pt: "Anel de Veneno"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684398,
		cardmarket: 877414
	}
}

export default card
