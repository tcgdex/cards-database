import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Walrein",
		fr: "Kaimorse",
		es: "Walrein",
		it: "Walrein",
		pt: "Walrein",
		de: "Walraisa"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur"
	},

	attacks: [{
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora",
			de: "Aurorastrahl"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Hail Prison",
			fr: "Prison de Grêle",
			es: "Prisión de Granizo",
			it: "Prigione di Grandine",
			pt: "Prisão de Granizo",
			de: "Hagelknast"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. Your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It shatters drift ice with its strong tusks. Its thick layer of blubber repels enemy attacks."
	}
}

export default card