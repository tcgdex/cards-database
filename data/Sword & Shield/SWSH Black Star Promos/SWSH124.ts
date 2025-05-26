import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Oswaldo KATO",
	category: "Pokemon",

	description: {
		en: "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph."
	},

	stage: "Basic",

	name: {
		en: "Galarian Zapdos",
		fr: "Électhor de Galar",
		de: "Galar-Zapdos",
		es: "Zapdos de Galar",
		pt: "Zapdos de Galar",
		it: "Zapdos di Galar"
	},

	rarity: "None",
	dexId: [145],
	hp: 110,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Strong Legs Charge",
			fr: "Charge Fort-Pied",
			de: "Laufender Ansturm",
			es: "Carga Patas Recias",
			pt: "Carga de Pernas Fortes",
			it: "Carica Zampeforti"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 {F} Energy cards from your hand to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de votre main à ce Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 {F}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {F} de tu mano a este Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {F} da sua mão a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia {F} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Zapper Kick",
			fr: "Pied Électrisant",
			de: "Stromkick",
			es: "Patada Exterminadora",
			pt: "Chute Elétrico",
			it: "Scaricalcio"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato."
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

	regulationMark: "E"
}

export default card
