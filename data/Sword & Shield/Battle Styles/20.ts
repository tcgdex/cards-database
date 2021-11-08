import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Heat Dash",
			fr: "Bouffée de Chaleur",
			es: "Carga Ardiente",
			it: "Teporcorsa",
			pt: "Arremetida de Calor",
			de: "Hitzespurt"
		},

		effect: {
			en: "You may attach a Fire Energy card from your hand to this Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Fire de votre main à ce Pokémon.",
			es: "Puedes unir 1 carta de Energía Fire de tu mano a este Pokémon.",
			it: "Puoi assegnare a questo Pokémon una carta Energia Fire dalla tua mano.",
			pt: "Você pode ligar 1 carta de Energia Fire da sua mão a este Pokémon.",
			de: "Du kannst 1 Fire-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
			es: "Colmillo Ígneo",
			it: "Rogodenti",
			pt: "Presas de Fogo",
			de: "Feuerzahn"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It is said that when it roars, a volcano erupts somewhere around the globe."
	}
}

export default card
