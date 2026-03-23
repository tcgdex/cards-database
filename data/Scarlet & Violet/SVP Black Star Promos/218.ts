import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Persian ex",
		fr: "Persian-ex de la Team Rocket"
	},
	suffix: "EX",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	evolveFrom: {
		en: "Team Rocket's Meowth",
		fr: "Miaouss de la Team Rocket",
		de: "Team Rockets Mauzi",
		it: "Meowth del Team Rocket",
		es: "Meowth del Team Rocket",
		pt: "Meowth da Equipe Rocket",
		'es-mx': "Meowth del Equipo Rocket"
	},
	stage: "Stage1",
	illustrator: "5ban Graphics",
	dexId: [53],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Haughty Order",
				fr: "Ordre Hautain",
			},
			effect: {
				en: "Reveal the top 10 cards of your opponent's deck. You may choose an attack from a Pokémon you find there and use it as this attack. Shuffle the revealed cards into your opponent's deck.",
				fr: "Montrez les 10 cartes du dessus du deck de votre adversaire. Vous pouvez choisir une attaque d'un Pokémon que vous y trouvez et l'utiliser en tant que cette attaque. Mélangez les cartes montrées avec le deck de votre adversaire.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cruel Slash",
				fr: "Tranche Cruelle",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: "140",
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
