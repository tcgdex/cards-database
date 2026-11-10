import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Golurk ex",
		fr: "Méga-Golemastoc‑ex",
		de: "Mega-Golgantes-ex",
		es: "Mega-Golurk ex",
		it: "Mega Golurk-ex",
		pt: "Mega Golurk ex",
		'es-mx': "Mega-Golurk ex"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 350,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Restricted Activation",
			fr: "Activation Restreinte",
			de: "Eingeschränkte Aktivierung",
			es: "Activación Condicionada",
			it: "Attivazione Condizionata",
			pt: "Ativação Restrita",
			'es-mx': "Activación Restringida"
		},

		effect: {
			en: "This Pokémon can't use attacks unless you have 10 or more cards in your hand.",
			fr: "Ce Pokémon ne peut utiliser d'attaques que si vous avez au moins 10 cartes en main.",
			de: "Dieses Pokémon kann keine Attacken einsetzen, es sei denn, du hast 10 oder mehr Karten auf deiner Hand.",
			es: "Este Pokémon no puede usar ataques a menos que tengas 10 cartas o más en tu mano.",
			it: "Questo Pokémon non può usare attacchi a meno che tu non abbia 10 o più carte in mano.",
			pt: "Este Pokémon não pode usar ataques a não ser que você tenha 10 ou mais cartas na sua mão.",
			'es-mx': "Este Pokémon no puede usar ataques a menos que tengas 10 cartas o más en tu mano."
		}
	}],

	attacks: [{
		name: {
			en: "Goliath's Punch",
			fr: "Poing de Goliath",
			de: "Goliaths Hieb",
			es: "Puñetazo de Goliat",
			it: "Pugno Mastodontico",
			pt: "Murro do Gigante",
			'es-mx': "Puño Titánico"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 300,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 728060,
		cardmarket: 918868
	}
}

export default card