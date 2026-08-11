import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [717],
	set: Set,

	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cross-Cut",
			'fr-fr': "Coupe Transversale",
			'es-es': "Atajar",
			'it-it': "Fendente Incrociato",
			'pt-br': "Corte em Cruz",
			'de-de': "Überkreuzzerschneider"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Dark Edge",
			'fr-fr': "Lame Obscurité",
			'es-es': "Filo Siniestro",
			'it-it': "Lama Oscura",
			'pt-br': "Gume Sombrio",
			'de-de': "Dunkelklinge"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740748,
				tcgplayer: 523886,
				cardtrader: 265378
			}
		},
	],

	illustrator: "Masako Tomii",

	
}

export default card
