import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray V",
		fr: "Luxray V",
		es: "Luxray V",
		it: "Luxray V",
		pt: "Luxray V",
		de: "Luxtra V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fang Snipe",
			fr: "Croc Ciblé",
			es: "Disparo Colmillo",
			it: "Zannamirata",
			pt: "Emboscada com Presas",
			de: "Rasanter Reißzahn"
		},

		effect: {
			en: "Your opponent reveals their hand. Discard a Trainer card you find there.",
			fr: "Votre adversaire dévoile sa main. Défaussez une carte Dresseur que vous y trouvez.",
			es: "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra esse.",
			pt: "Seu oponente revela a própria mão. Descarte 1 carta de Treinador que encontrar lá.",
			de: "Dein Gegner zeigt dir seine Handkarten. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Radiating Pulse",
			fr: "Impulsion Radiante",
			es: "Pulso Radiante",
			it: "Pulsazioni Radianti",
			pt: "Pulso Radiante",
			de: "Pulsstrahl"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658597,
		tcgplayer: 272420
	}
}

export default card