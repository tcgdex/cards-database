import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Claydol",
		fr: "Kaorine de Pierre",
		de: "Troys Lepumentas",
		it: "Claydol di Rocco",
		es: "Claydol de Máximo",
		pt: "Claydol do Steven",
		'es-mx': "Claydol de Steven"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Eerie Light",
			fr: "Lumière Étrange",
			de: "Gespenstisches Licht",
			it: "Luci Inquietanti",
			es: "Luz Lúgubre",
			pt: "Luz Misteriosa",
			'es-mx': "Luz Inquietante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Clay Blast",
			fr: "Explosion d'Argile",
			de: "Lehmdetonation",
			it: "Esplosione d'Argilla",
			es: "Explosión de Barro",
			pt: "Explosão de Argila",
			'es-mx': "Explosión de Barro"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
