import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				es: "Viento Hielo",
				it: "Ventogelato",
				pt: "Vento Congelante",
				de: "Eissturm"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Evil Admonition",
				fr: "Réprimande Maléfique",
				es: "Amonestación Malvada",
				it: "Avvertimento Malvagio",
				pt: "Advertência Maligna",
				de: "Böses Gebot"
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent’s Pokémon that has an Ability.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de votre adversaire ayant un talent.",
				es: "Este ataque hace 50 puntos de daño por cada uno de los Pokémon de tu rival que tenga una habilidad.",
				it: "Questo attacco infligge 50 danni per ogni Pokémon del tuo avversario che abbia un’abilità.",
				pt: "Este ataque causa 50 pontos de dano para cada um dos Pokémon do seu oponente que tiver uma Habilidade.",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon deines Gegners zu, die eine Fähigkeit haben."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 316002
	}
}

export default card
