import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion",
		fr: "Volcanion",
		de: "Volcanion",
		it: "Volcanion",
		es: "Volcanion",
		pt: "Volcanion",
		'es-mx': "Volcanion"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	dexId: [721],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			de: "Versengung",
			it: "Scottata",
			es: "Quemadura",
			pt: "Chamuscada",
			'es-mx': "Quemadura"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Backfire",
			fr: "Retour de Feu",
			de: "Rückzündung",
			it: "Fiammata di Ritorno",
			es: "Devolución Fogosa",
			pt: "Saindo Pela Culatra",
			'es-mx': "Devolución Ígnea"
		},

		effect: {
			en: "Put 2 {R} Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies {R} attachées à ce Pokémon.",
			de: "Nimm 2 an dieses Pokémon angelegte {R}-Energien auf deine Hand.",
			it: "Prendi due Energie {R} assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			es: "Pon 2 Energías {R} unidas a este Pokémon en tu mano.",
			pt: "Coloque 2 Energias {R} ligadas a este Pokémon na sua mão.",
			'es-mx': "Pon 2 Energías {R} unidas a este Pokémon en tu mano."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654364,
		cardmarket: 851096
	}
}

export default card