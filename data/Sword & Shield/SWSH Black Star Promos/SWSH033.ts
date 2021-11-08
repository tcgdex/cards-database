import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		it: "Zacian",
		pt: "Zacian",
		de: "Zacian"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			it: "Sgranocchio",
			pt: "Crunch",
			de: "Knirscher"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Metal Blade",
			fr: "Lame de Métal",
			es: "Cuchilla Metal",
			it: "Lama Metallica",
			pt: "Metal Blade",
			de: "Metallklinge"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Discard 3 Energy from this Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	stage: "Basic",
	dexId: [888],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
