import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [858],
	set: Set,

	name: {
		en: "Hatterene VMAX",
		fr: "Sorcilence VMAX",
		es: "Hatterene VMAX",
		it: "Hatterene VMAX",
		pt: "Hatterene VMAX",
		de: "Silembrim VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hatterene V",
		fr: "Sorcilence-V",
		es: "Hatterene V",
		it: "Hatterene-V",
		pt: "Hatterene V",
		de: "Silembrim-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Witch's Domain",
			fr: "Domaine de la Sorcière",
			es: "Dominio de la Hechicera",
			it: "Dominio della Strega",
			pt: "Domínio da Bruxa",
			de: "Hexenreich"
		},

		effect: {
			en: "Once during your turn, you may move up to 2 damage counters from your Pokémon to your opponent's Active Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer jusqu'à 2 marqueurs de dégâts de vos Pokémon vers le Pokémon Actif de votre adversaire.",
			es: "Una vez durante tu turno, puedes mover hasta 2 contadores de daño de tus Pokémon al Pokémon Activo de tu rival.",
			it: "Una sola volta durante il tuo turno, puoi spostare fino a due segnalini danno dai tuoi Pokémon al Pokémon attivo del tuo avversario.",
			pt: "Uma vez durante o seu turno, você poderá mover até 2 contadores de dano dos seus Pokémon para o Pokémon Ativo do seu oponente.",
			de: "Einmal während deines Zuges kannst du bis zu 2 Schadensmarken von deinen Pokémon auf das Aktive Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "G-Max Smite",
			fr: "Sentence G-Max",
			es: "Gigacastigo",
			it: "Gigacastigo",
			pt: "Castigo G-Max",
			de: "Giga-Sanktion"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691783
	}
}

export default card