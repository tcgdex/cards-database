import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		en: "Fuecoco",
		fr: "Chochodile",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Super Singe",
			fr: "Super Roussi",
			es: "Superquemadura",
			it: "Super Scottata",
			pt: "Superchamuscada",
			de: "Super-Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Ryuta Fuse",
	description: {
		en: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 690962,
				tcgplayer: 477182
			},
		}
	],
}

export default card
