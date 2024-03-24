import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex",
		fr: "Dracaufeu-ex",
		es: "Charizard ex",
		it: "Charizard-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infernal Reign",
			fr: "Règne Infernal",
			es: "Reino Infernal",
			it: "Regno Infernale"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie Fire de base et les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía Fire Básica y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base Fire e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Burning Darkness",
			fr: "Obscurité Brûlante",
			es: "Oscuridad Ardiente",
			it: "Oscurità Infuocata"
		},

		effect: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario."
		},

		damage: "180+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card