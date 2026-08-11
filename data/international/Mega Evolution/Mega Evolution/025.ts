import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Volcanion",
		'fr-fr': "Volcanion",
		'de-de': "Volcanion",
		'it-it': "Volcanion",
		'es-es': "Volcanion",
		'pt-br': "Volcanion",
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
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'de-de': "Versengung",
			'it-it': "Scottata",
			'es-es': "Quemadura",
			'pt-br': "Chamuscada",
			'es-mx': "Quemadura"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Backfire",
			'fr-fr': "Retour de Feu",
			'de-de': "Rückzündung",
			'it-it': "Fiammata di Ritorno",
			'es-es': "Devolución Fogosa",
			'pt-br': "Saindo Pela Culatra",
			'es-mx': "Devolución Ígnea"
		},

		effect: {
			'en-us': "Put 2 {R} Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main 2 Énergies {R} attachées à ce Pokémon.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte {R}-Energien auf deine Hand.",
			'it-it': "Prendi due Energie {R} assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'es-es': "Pon 2 Energías {R} unidas a este Pokémon en tu mano.",
			'pt-br': "Coloque 2 Energias {R} ligadas a este Pokémon na sua mão.",
			'es-mx': "Pon 2 Energías {R} unidas a este Pokémon en tu mano."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851096,
				tcgplayer: 654364
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851096,
				tcgplayer: 654364
			}
		},
	],
}

export default card
