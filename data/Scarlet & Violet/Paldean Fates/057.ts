import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Night Gate",
			fr: "Portail Nocturne",
			es: "Portal Nocturno",
			it: "Portale Notturno",
			pt: "Portão Noturno",
			de: "Nachtpforte"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
			es: "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por uno de tus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo con uno della tua panchina.",
			pt: "Uma vez durante o seu turno, você poderá trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
			de: "Einmal während deines Zuges kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Nightmare",
			fr: "Cauchemar",
			es: "Pesadilla",
			it: "Incubo",
			pt: "Pesadelo",
			de: "Nachtmahr"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card