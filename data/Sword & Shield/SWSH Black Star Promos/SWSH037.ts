import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "Taira Akitsu",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Squall",
			fr: "Rafale Obscure",
			es: "Ráfaga Oscura",
			it: "Burrasca Oscura",
			pt: "Dark Squall",
			de: "Finsterböe"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Darkness dalla tua mano tutte le volte che vuoi.",
			pt: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Darkness-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			es: "Colmillos Azabaches",
			it: "Zanne Buiopesto",
			pt: "Pitch-Black Fangs",
			de: "Pechschwarze Fänge"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	description: {
		en: "There are a slew of stories about villages that were destroyed by Hydreigon. It bites anything that moves."
	},

	stage: "Stage2",
	dexId: [635],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
