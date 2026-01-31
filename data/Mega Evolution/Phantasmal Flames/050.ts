import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		'es-mx': "Gliscor",
		de: "Skorgro",
		it: "Gliscor",
		pt: "Gliscor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [472],

	attacks: [{
		cost: ["Fighting"],

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
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857625,
		tcgplayer: 662163
	}
}

export default card