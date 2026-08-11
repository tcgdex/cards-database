import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Oswaldo KATO",
	category: "Pokemon",

	description: {
		'en-us': "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph."
	},

	stage: "Basic",

	name: {
		'en-us': "Galarian Zapdos",
		'fr-fr': "Électhor de Galar",
		'de-de': "Galar-Zapdos",
		'es-es': "Zapdos de Galar",
		'pt-br': "Zapdos de Galar",
		'it-it': "Zapdos di Galar"
	},

	rarity: "Promo",
	dexId: [145],
	hp: 110,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Strong Legs Charge",
			'fr-fr': "Charge Fort-Pied",
			'de-de': "Laufender Ansturm",
			'es-es': "Carga Patas Recias",
			'pt-br': "Carga de Pernas Fortes",
			'it-it': "Carica Zampeforti"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 {F} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de votre main à ce Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 {F}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {F} de tu mano a este Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {F} da sua mão a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia {F} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Zapper Kick",
			'fr-fr': "Pied Électrisant",
			'de-de': "Stromkick",
			'es-es': "Patada Exterminadora",
			'pt-br': "Chute Elétrico",
			'it-it': "Scaricalcio"
		},

		effect: {
			'en-us': "You may discard all Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 573859
	}
}

export default card
