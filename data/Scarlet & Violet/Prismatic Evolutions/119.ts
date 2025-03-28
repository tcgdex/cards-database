import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Prime Catcher",
		fr: "Attrape-Ultime",
		es: "Capturador Supremo",
		pt: "Pegador Superior",
		it: "Acchiappa-Pokémon Eccellente",
		de: "Erstklassiger Fänger"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isto, troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, scambia il tuo Pokémon attivo con uno della tua panchina.",
		de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card