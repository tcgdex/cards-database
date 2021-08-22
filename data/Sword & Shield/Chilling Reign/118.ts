import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Bug Transmission",
			fr: "Piratage",
			es: "Transmisión de Errores",
			it: "Trasmissione Bug",
			pt: "Transmissão Bugada",
			de: "Fehlerübertragung"
		},

		effect: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon during your turn, you may make your opponent’s Active Pokémon Confused.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
			es: "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido.",
			it: "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
			pt: "Sempre que você ligar 1 carta de Energia da sua mão a este Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso.",
			de: "Jedes Mal, wenn du während deines Zuges 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du das Aktive Pokémon deines Gegners verwirren."
		}
	}],

	attacks: [{
		name: {
			en: "Superbeam",
			fr: "Super Rayon",
			es: "Supertransmisión",
			it: "Super Raggio",
			pt: "Superraio",
			de: "Superstrahl"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "A faulty update was added to its programming. Its behavior is noticeably strange, so the experiment may have been a failure."
	}
}

export default card