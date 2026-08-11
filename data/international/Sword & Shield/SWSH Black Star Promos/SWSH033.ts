import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian",
		'de-de': "Zacian"
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'de-de': "Knirscher"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Metal Blade",
			'fr-fr': "Lame de Métal",
			'es-es': "Cuchilla Metal",
			'it-it': "Lama Metallica",
			'pt-br': "Lâmina Metálica",
			'de-de': "Metallklinge"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
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
		'en-us': "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	stage: "Basic",
	dexId: [888],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 465529
	}
}

export default card
