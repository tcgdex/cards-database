import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [44],

	name: {
		en: "Erika's Gloom",
		fr: "Ortide d'Erika",
		es: "Gloom de Erika",
		'es-mx': "Gloom de Erika",
		de: "Erikas Duflor",
		it: "Gloom di Erika",
		pt: "Gloom da Érica"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Poison Spray",
			fr: "Pulvérisation Toxique",
			es: "Aerosol Venenoso",
			'es-mx': "Aerosol Venenoso",
			de: "Giftspray",
			it: "Spruzzo Velenoso",
			pt: "Spray de Veneno"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675814,
		cardmarket: 869613
	}
}

export default card