import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Galarian Zapdos",
		fr: "Électhor de Galar",
		es: "Zapdos de Galar",
		it: "Zapdos di Galar",
		pt: "Zapdos de Galar",
		de: "Galar-Zapdos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "kodama",

	abilities: [{
		type: "Ability",

		name: {
			en: "Strong Legs Charge",
			fr: "Charge Fort-Pied",
			es: "Carga Patas Recias",
			it: "Carica Zampeforti",
			pt: "Strong Legs Charge",
			de: "Laufender Ansturm"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Fighting Energy cards from your hand to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Fighting de votre main à ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía Fighting de tu mano a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia Fighting dalla tua mano.",
			pt: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Fighting Energy cards from your hand to this Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Fighting-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Zapper Kick",
			fr: "Pied Électrisant",
			es: "Patada Exterminadora",
			it: "Scaricalcio",
			pt: "Zapper Kick",
			de: "Stromkick"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "You may discard all Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0,

	description: {
		en: "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph."
	},

	dexId: [145],
	regulationMark: "E"
}

export default card
